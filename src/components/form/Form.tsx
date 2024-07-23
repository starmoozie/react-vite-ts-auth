/* eslint-disable @typescript-eslint/no-explicit-any */

import { memo, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitButton } from "../buttons/submit";
import { createYupSchema } from "../../utils/schema";
import { FieldType } from "../../types/defaultFieldType";
import { InputField } from "../fields/input-field";

export interface FormType {
	fields: FieldType[];
	onSubmitCallback?: (data: any) => void;
}

export const Form = memo((props: FormType) => {
	const { fields, onSubmitCallback } = props;

	const schema = useMemo(() => createYupSchema(fields), [fields]);
	const { handleSubmit, control, setValue } = useForm({
		resolver: useMemo(() => yupResolver(schema), [schema]),
	});

	const onSubmit = (data: any) => {
		if (onSubmitCallback) {
			onSubmitCallback(data);
		} else {
			// TODO: fetch data
			console.log("onSubmit", data);
		}
	};

	return (
		<form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
			{fields.map((item: FieldType, index: number) => {
				const FieldComponent = item?.Component || InputField;

				return (
					<FieldComponent
						key={index}
						control={control}
						name={item.name}
						label={item.label}
						placeholder={item?.placeholder}
						setValue={setValue}
					/>
				);
			})}

			<SubmitButton />
		</form>
	);
});

export default Form;
