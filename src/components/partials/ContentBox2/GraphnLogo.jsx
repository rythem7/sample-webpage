import group5 from "../../../assets/group5.png";
import bigLogo from "../../../assets/big_logo.png";

export default function GraphnLogo() {
    return (
        <div className="size-auto relative overflow-hidden">
                    <img src={group5} alt="graph" className="scale-75 lg:scale-100 pb-8 lg:pb-20 opacity-90"></img>
                    <img src={bigLogo} alt="logo" className="absolute lg:scale-100 scale-65 top-30 left-20 saturate-95"></img>
        </div>
    );
}