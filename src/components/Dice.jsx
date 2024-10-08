import { useState } from "react"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"
import empty from "../assets/images/dice-empty.png"


function Dice (){
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

    const [dice, setDice] = useState(dice3)

    const getRandomImage = ()=>{
        const randomIndex = Math.floor(Math.random () * diceImages.length)
        return diceImages[randomIndex]
    }

    return(
        <div>
            <img
                src={dice}
                onClick={() => setDice(getRandomImage())}
            />
        </div>
    )

}

export default Dice