import { useNavigate } from "react-router-dom";
import type { PortfolioList } from "../store/store.ts";

interface InfoNavProps {
    list: PortfolioList[];
    name: string | undefined;
}
export function InfoNav({ list, name }: InfoNavProps) {
    const navigate = useNavigate();
    const findThisPortfolio = list.find((element) => element.name === name);

    return (
        <div className="w-[1120px] fixed pt-[40px] backdrop-blur-[2px] z-90">
            <button
                type="button"
                className="absolute px-[20px] pt-[12px] pb-[40px] cursor-pointer shadow-bulr rounded-20px bg-white -z-1"
                onClick={() => navigate("/")}
            >
                <div className="w-[54px] h-[16px] text-[0px] bg-[url(../public/common/icon_back_arrow.svg)] bg-cover transition-all duration-700 hover:bg-position-[-56px_0]">
                    ←
                </div>
            </button>
            <div className="w-[100%] px-[20px] py-[22px] mt-[36px] box-border rounded-20px shadow-bulr bg-white">
                <div className="flex gap-[6px] items-center">
                    <h1 className="text-[20px]">{findThisPortfolio?.info[0].title}</h1>
                    {findThisPortfolio?.info[0].link && (
                        <div>
                            <a
                                href={findThisPortfolio?.info[0].link}
                                className="w-[17px] h-[17px] block bg-[url(../public/common/icon_link.svg)]"
                            ></a>
                        </div>
                    )}
                </div>
                <ul className="flex gap-[10px] pt-[10px]">
                    <li className="text-[14px]">{findThisPortfolio?.info[0].date}</li>
                    <li className="text-[14px]">{findThisPortfolio?.info[0].type}</li>
                    <li className="text-[14px]">{findThisPortfolio?.info[0].contribution}%</li>
                    <li className="text-[14px]">{findThisPortfolio?.info[0].workforce}명</li>
                    <li className="flex gap-[16px]">
                        {findThisPortfolio?.info[0].tool?.map((element, index) => {
                            return (
                                <ul
                                    key={index}
                                    className="relative flex gap-[6px] [&:nth-child(n+2)]:before:content-['/'] before:text-[12px] before:absolute before:left-[-10px] before:top-[50%] before:translate-y-[-50%]"
                                >
                                    {element.map((item, subIndex) => {
                                        return (
                                            <li
                                                key={subIndex}
                                                className={`mark_tool color_${item.toLowerCase()}`}
                                            >
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            );
                        })}
                    </li>
                </ul>
            </div>
        </div>
    );
}

interface PortfolioListProps {
    item: PortfolioList;
    index: number;
}
export function PortfolioList({ item, index }: PortfolioListProps) {
    const navigate = useNavigate();

    return (
        <li
            key={index}
            className="w-[100%] h-[60px] px-[20px] box-border rounded-20px overflow-hidden bg-transparent transition-all duration-700 hover:h-[112px] hover:bg-white"
        >
            <button
                className="w-[100%] block cursor-pointer"
                onClick={() => navigate(`/portfolio/${item.name}`)}
            >
                <div className="py-[20px] flex justify-between">
                    <h6>{item.info[0].title}</h6>
                    <p>{item.info[0].date}</p>
                </div>
                {/*hover 시 보이는 영역*/}
                <ul className="flex gap-[10px] justify-end py-[20px]">
                    <li>{item.info[0].type}</li>
                    <li>{item.info[0].contribution}%</li>
                    <li>{item.info[0].workforce}명</li>
                    <li className="flex gap-[16px]">
                        {item.info[0].tool?.map((element, subIndex) => {
                            return (
                                <ul
                                    key={subIndex}
                                    className="relative flex gap-[6px] [&:nth-child(n+2)]:before:content-['/'] before:text-[12px] before:absolute before:left-[-10px] before:top-[50%] before:translate-y-[-50%]"
                                >
                                    {element.map((toolName, inIndex) => {
                                        return (
                                            <li
                                                key={inIndex}
                                                className={`mark_tool color_${toolName.toLowerCase()}`}
                                            >
                                                {toolName}
                                            </li>
                                        );
                                    })}
                                </ul>
                            );
                        })}
                    </li>
                </ul>
            </button>
        </li>
    );
}
