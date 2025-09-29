import { InfoNav } from "../assets/Fragment.tsx";
import { useParams } from "react-router-dom";
import { usePortfolioStore } from "../store/store.ts";

//slide 관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

export default function Mabinogi() {
    const { name } = useParams<{ name: string }>();
    const portfolioList = usePortfolioStore((state) => state.list);

    return (
        <div className="w-[100%] bg-beige-100">
            <div className="w-[1120px] pb-[140px] mx-auto">
                <InfoNav name={name} list={portfolioList} />
                {/*    본문     */}
            </div>
        </div>
    );
}
