import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function Searchform() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        Buscar <MagnifyingGlass size={20} />
        </button>
    </SearchFormContainer>
  )
}