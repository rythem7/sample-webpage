import GraphnLogo from "./GraphnLogo";
import TextContent from "./TextContent";

export default function LowerCard() {
    return (
        <div className="flex flex-col lg:flex-row lg:w-300 lg:min-h-150 h-auto bg-base-300 rounded-box shadow-lg">
            <div className="flex-1 flex justify-center items-center">
                <GraphnLogo />
            </div>
            <div className="flex-1 flex flex-col justify-around p-8 lg:p-15 gap-3">
                <TextContent />
                <TextContent />
                <TextContent />
            </div>
        </div>
    )
}