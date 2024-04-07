import Leaf from "./Leaf";

type PropsType = {
    rotate: boolean
}

export default function Sidebar({ rotate }: PropsType) {
    return (
        <div className="w-[50px]">
            <div className={`mb-12 ${rotate ? " mr-[90px]" : " ml-[90px]"}`}>
                <Leaf />
            </div>
            <div className={`mb-12 ${rotate ? " mr-[12px]" : " ml-[12px]"}`}>
                <Leaf />
            </div>
            <div className={`mb-12 ${rotate ? " mr-[40px]" : " ml-[40px]"}`}>
                <Leaf />
            </div>
            <div className={`mb-12 ${rotate ? " mr-[11px]" : " ml-[11px]"}`}>
                <Leaf />
            </div>
            <div className={`mb-12 ${rotate ? " mr-[85px]" : " ml-[85px]"}`}>
                <Leaf />
            </div>

        </div>
    )
}