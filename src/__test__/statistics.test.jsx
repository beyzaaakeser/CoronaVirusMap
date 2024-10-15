import { render, screen } from "@testing-library/react"
import Statistics from "../pages/home/Statistics"

test("renders the loading state initially", async () =>{
    render(<Statistics/>)

    const loader = screen.getByTestId("loader")
 
    await screen.findByText("Total Cases",{},{
        timeout:3000
    })
    await screen.findByText("Total Recovered Cases",{},{
        timeout:3000
    })
    await screen.findByText("Total Deaths",{},{
        timeout:3000
    })

})