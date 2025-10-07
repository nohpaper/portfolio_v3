import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Receipt from "./Receipt.tsx";
import Golf from "./Golf.tsx";
import EnergySolution from "./EnergySolution.tsx";
import Shopchain from "./Shopchain.tsx";
import Mabinogi from "./Mabinogi.tsx";
import Recordbook from "./Recordbook.tsx";

export default function PortfolioView() {
    const { name } = useParams<{ name: string }>();
    const navigate = useNavigate();

    if (name === "golf") {
        return <Golf />;
    } else if (name === "receipt") {
        return <Receipt />;
    } else if (name === "energy_solution") {
        return <EnergySolution />;
    } else if (name === "shopchain") {
        return <Shopchain />;
    } else if (name === "mabinogi") {
        return <Mabinogi />;
    }else if (name === "recordbook") {
        return <Recordbook />;
    }

    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center bg-beige-100">
            <div className="flex justify-center flex-col">
                <p className="leading-[1.3]">
                    제 포트폴리오에서 <b className="marker_yellow"> "{name}" </b> 는 찾을 수 없어요.
                </p>
                <button
                    type="button"
                    className="marker_yellow pt-[10px] cursor-pointer leading-[1.3] transition-all duration-700 bg-position-[-300px_bottom] hover:bg-position-[0_bottom]"
                    onClick={() => navigate(`/`)}
                >
                    홈으로 이동할까요?
                </button>
            </div>
        </div>
    );
}
