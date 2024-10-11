import { render, screen } from "@testing-library/react"
import Statistics from "../pages/home/Statistics"

test("renders the loading state initially",() =>{
    render(<Statistics/>)

    const loader = screen.getByTestId("loader")

})