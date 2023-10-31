import { useLoteria } from "../hooks"

export default function Principal() {
    const {megasena} = useLoteria();
    return (
        <div>
            {
                JSON.stringify(megasena)
            }
        </div>
    )
}