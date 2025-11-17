import {
  Component,
  Input,
  forwardRef,
  OnChanges,
  SimpleChanges,
  OnInit,
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormControl,
} from "@angular/forms";
import { CommonModule } from "@angular/common";

let nextId = 0;

@Component({
  selector: "app-form-input",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./form-input.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
})
export class FormInputComponent
  implements ControlValueAccessor, OnChanges, OnInit
{
  @Input() label: string = "";
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() id: string = "";
  @Input() borderColor: string = "border-google-blue";
  @Input() marginBottom: string = "mb-10 md:mb-12";
  @Input() formControl?: FormControl | null;

  value: string = "";
  disabled: boolean = false;
  private readonly inputId: string;

  constructor() {
    this.inputId = `form-input-${nextId++}`;
  }

  get fieldId(): string {
    return this.id || this.inputId;
  }

  ngOnInit(): void {
    if (this.formControl) {
      this.value = this.formControl.value || "";
      this.disabled = this.formControl.disabled;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["formControl"] && this.formControl) {
      this.value = this.formControl.value || "";
      this.disabled = this.formControl.disabled;
    }
  }

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || "";
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
