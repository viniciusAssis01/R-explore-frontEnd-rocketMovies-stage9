import { StyledInput } from "./style";

//convertendo icon para Icon: a propriedade (passada ao usar o componente) vai estar em minuscula, mas chegando aqui queremos passar para maiuscula - fizemos isso pois estamos passando um componente como props
export function Input({ icon: Icon, ...rest }) {
	return (
		<StyledInput>
			{/* esse operador "&&" equivale a um if (só q bem mais enxuto) */}
			{Icon && <Icon size={20} />}
			<input {...rest} />
		</StyledInput>
	);
}
