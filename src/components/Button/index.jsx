import { Container } from "./style";

export function Button({ title, loading = false, ...rest }) {
	//caso o loading ñ seja informado (ñ seje passado), ele vai assumir o valor (valor padrão) de false
	return (
		<Container type="button" disabled={loading} {...rest}>
			{loading ? "carregando..." : title}
		</Container>
	);
}
//se o loading for verdadeiro, vai aparecer a mensagem "carregando"; caso contrario, aparece o valor q a variavel title armazena
