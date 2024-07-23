import { memo } from "react";
import { Control, Controller } from "react-hook-form";

import { DefaultFieldType } from "../../../types/defaultFieldType";
import { ucwords } from "../../../utils/helper";

export interface InputFieldType extends DefaultFieldType {
	type?: string;
	autocomplete?: boolean;
	control: Control;
}

export const InputField = memo((props: InputFieldType) => {
	const { type, label, placeholder, name, control, autocomplete } = props;

	return (
		<div>
			<Controller
				name={name}
				control={control}
				defaultValue={``} // Handle uncontrolled to controlled component
				render={({ field, fieldState }) => {
					const { error } = fieldState;

					return (
						<>
							<label
								className="block mb-2 text-sm font-medium"
								htmlFor={name}
							>
								{label || ucwords(name)}
							</label>
							<input
								{...field}
								id={name}
								type={type || "text"}
								className="border text-sm rounded-lg block w-full p-2.5"
								placeholder={
									placeholder || `Please input ${name}`
								}
								autoComplete={autocomplete ? "on" : "off"}
							/>

							{error && (
								<p className="mt-2 text-sm text-red-600">
									<span className="font-medium">
										{error.message}
									</span>
								</p>
							)}
						</>
					);
				}}
			/>
		</div>
	);
});

export default InputField;
