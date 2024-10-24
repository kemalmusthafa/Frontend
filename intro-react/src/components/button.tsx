import styled from "styled-components"

const StyledButton = styled.button`
    background-color: black;
    padding: 5px;
    font-size: small;
    color: white;
    border: 1px solid white;
    border-radius: 2px;
`
function Button () {
    return (
        <StyledButton>READ MORE</StyledButton>
    )
}
export default Button