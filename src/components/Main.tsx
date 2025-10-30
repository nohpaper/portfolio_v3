import { useState } from "react";
import { usePortfolioStore } from "../store/store.ts";
import { PortfolioList } from "../assets/Fragment.tsx";

export default function Main() {
    const portfolioList = usePortfolioStore((state) => state.list);
    const [myDescription, setMyDescription] = useState([
        {
            isContentView: false,
            title: "인터렉션 홈페이지 제작 경험",
            content:
                "브랜드 리뉴얼 및 캠페인 사이트를 제작하면서, 사용자에게 정보를 보다 직관적이고 흥미롭게 전달하기 위한 다양한 인터랙션을 구현한 경험이 있습니다. 주로 스크롤에 반응하는 애니메이션을 통해 콘텐츠 흐름을 자연스럽게 유도하고, 집중도를 높일 수 있도록 구성했습니다. 퍼블리셔로서 전체 페이지의 구조 설계는 물론, GSAP과 ScrollTrigger, Web Lottie 등의 기술을 활용한 인터랙션 구현을 담당했습니다. 특히 모션팀과 협업하여 제작된 Lottie용 JSON 파일을 웹사이트에 자연스럽게 삽입함으로써, 정교한 모션을 웹 환경에서도 이질감 없이 구현할 수 있도록 했습니다. 모바일 환경에서는 성능 저하나 로딩 지연을 방지하기 위해 주요 애니메이션만 유지하고, 나머지는 정적으로 처리하는 등 사용자 경험을 고려한 유연한 구현 방식으로 완성도를 높였습니다." +
                "\n\n" +
                "인터랙션 요소가 많은 사이트의 특성상, 디자인 변경이나 방향 수정이 발생하면 재작업 범위가 커질 수 있기에 구조적인 유연성과 유지 보수성을 염두에 두고 개발을 진행했습니다. 초기 로딩 시간이 길어질 것으로 예상되는 경우에는 로딩 화면을 제안하여 사용자에게 오류로 인식되지 않도록 하고, 애니메이션 구현 시 디자이너의 의도와 웹 기술 간의 간극을 줄이기 위해 긴밀히 협업했습니다. 디자인상의 인터랙션을 그대로 구현했음에도 기대한 퍼포먼스가 나오지 않을 경우에는 모션팀에 자문을 구하거나 다른 접근 방식으로 개선 방향을 제안하는 등, 팀 간 소통과 기술적 판단을 바탕으로 최적의 결과를 도출하기 위해 노력했습니다. 이러한 과정을 통해 시각적 완성도뿐만 아니라 사용성과 성능을 모두 고려한 결과물을 만들어낼 수 있었고, 프로젝트에 참여한 팀원들과 클라이언트 모두에게 긍정적인 평가를 받을 수 있었습니다.",
        },
        {
            isContentView: false,
            title: "팀원 관리 경험",
            content:
                "과장급 상급자 한 분은 퇴사하고, 또 다른 한 분은 육아휴직으로 자리를 비우시게 되면서 팀은 대리 1명과 주임들만 남게 되었습니다. 이로 인해 자연스럽게 리더십 부재에 대한 불안감이 팀원들 사이에 생기기 시작했고, 저 역시 이전 회사에서 비슷한 상황을 겪은 경험이 있었기에 팀 분위기를 안정시키기 위해 어떤 방식으로든 기여하고 싶다는 생각이 들었습니다. 공식적인 리더는 대리님이셨기 때문에 제가 나서는 것이 조심스러웠지만, 팀을 위해 제가 할 수 있는 일이 무엇일지 계속 고민하며 실천에 옮기기 시작했습니다. 퍼블리싱 컨벤션 정리, 개인 학습 내용 공유, 팀원 간의 소통 유도 등 작지만 팀에 도움이 되는 일들을 자발적으로 진행하며 팀워크를 다져나갔습니다. 특히, 누구 하나 나서기 어려운 분위기 속에서도 먼저 다가가 대화를 시도하고, 자연스럽게 소통의 중심이 되어 팀원들의 불안감을 덜어주는 데 집중했습니다." +
                "\n\n" +
                "이 과정에서 저는 대리님과 자주 커뮤니케이션하며 제 행동이 앞서 나가는 인상으로 비치지 않도록 신중하게 조율했습니다. 대리님의 부담을 덜어드리는 동시에 팀에 긍정적인 영향을 줄 수 있도록 균형을 잡는 것이 중요하다고 판단했고, 대화 속에서 대리님의 입장을 경청하고 존중하는 태도를 유지했습니다. 직급은 높지 않았지만 팀을 위해 스스로 할 수 있는 역할을 주도적으로 찾아 나선 이 경험을 통해, 리더십은 꼭 직책에서만 나오는 것이 아니라는 걸 느꼈습니다. 과장님이 복귀하신 후에는 이런 저의 노력을 듣고 “팀을 잘 이끌어줘서 고맙다”는 말씀을 해주셨고, 그 말을 통해 제가 했던 선택과 행동이 올바른 방향이었음을 확인할 수 있었습니다.",
        },
        {
            isContentView: false,
            title: "프로젝트 기간 수립, 기간 내 계획",
            content:
                '프로젝트에 착수하기 전, 퍼블리싱 일정이 전달되면 전체 페이지를 기준으로 예상 소요 시간을 산정하고, 이를 바탕으로 프로젝트 볼륨에 비해 일정이 적절한지 먼저 판단했습니다. 일정이 촉박하다고 판단될 경우에는 바로 승인하거나 그대로 진행하기보다는, 작업 우선순위를 조정하거나 병렬로 진행 가능한 업무가 있는지 먼저 검토하고, 필요 시 일정 조정이 가능한지 조심스럽게 문의드리는 방식으로 조율했습니다. 이때에도 단순히 "시간이 부족하다"는 이유보다는, 구조나 애니메이션, 협업 요소 등 일정에 영향을 미칠 수 있는 구체적인 사유를 근거로 설명드리며 설득력 있게 접근하려 노력했습니다. 이러한 사전 조율 과정을 통해 일정은 최대한 지키면서도 작업의 완성도를 떨어뜨리지 않도록 계획적으로 접근해왔습니다.' +
                "\n\n" +
                "또한 본격적인 작업에 앞서 전체 프로젝트 일정을 확인하고, 디자인팀이나 모션팀과 협의가 필요한 부분이 있는지 사전에 체크하여 구현 중 병목 구간이 생기지 않도록 준비했습니다. 퍼블리싱 관점에서 구현 난이도가 높거나 협의가 필요한 요소가 있을 경우, 해당 부서와 미리 공유하고 일정 내에 해결 방안을 마련함으로써 작업 흐름이 끊기지 않도록 했습니다. 프로젝트 셋팅 시에는 전체 작업 구조와 양식을 정리하고, 공통 컴포넌트와 스타일 가이드를 기준으로 파일 및 코드를 일관되게 구성하여 이후 작업자나 협업자가 보더라도 쉽게 이해할 수 있는 구조를 갖추는 데 중점을 두었습니다. 또한 페이지별 작업 순서를 정리하여 PL에게 공유함으로써 전체 일정에 대한 예측 가능성을 높이고, 프로젝트가 일정과 품질 모두를 만족시킬 수 있도록 안정적인 작업 환경을 조성해왔습니다.",
        },
        {
            isContentView: false,
            title: "홈페이지 유지보수 업무 경험",
            content:
                "여러 업체의 웹사이트를 동시에 유지보수하면서, 다양한 구조와 운영 방식의 사이트를 빠르게 파악하고 기억해두는 습관을 통해 효율적인 관리 역량을 키울 수 있었습니다. 특히 제품 정보나 공지사항 등의 콘텐츠를 추가·수정·삭제하는 작업이 빈번하게 이루어졌기 때문에, 기존 코드나 레이아웃에 영향을 주지 않으면서도 정확하고 빠르게 반영하는 데 중점을 두었습니다. 유지보수 작업 특성상 여러 개발자나 퍼블리셔를 거친 이력이 있는 경우가 많아, 코드나 스타일 구조가 일관되지 않거나 문서화가 부족한 경우가 있었고, 이로 인해 작은 수정에도 레이아웃이 무너질 수 있는 상황이 발생할 수 있었습니다. 이를 방지하기 위해 기존 구조나 스타일을 최대한 보존하며, 변경이 필요한 경우에도 전체 영향 범위를 고려한 신중한 접근으로 작업을 진행했습니다." +
                "\n\n" +
                "또한 여러 프로젝트를 병행하면서도 유지보수 요청이 들어오면 우선순위를 조율하고, 실수를 줄이기 위해 요청 내용을 정확히 파악하고 정리한 후 작업에 착수하는 프로세스를 갖추었습니다. 특히 제품 콘텐츠의 경우 사용자에게 직접 노출되는 중요한 정보이기 때문에, 세부 내용과 링크, 스타일 반영 여부 등을 꼼꼼하게 점검하며 책임감을 가지고 작업했습니다. 이러한 경험을 통해 유지보수 역시 단순한 수정이 아닌, 사이트의 품질과 신뢰도를 유지하는 데 핵심적인 역할을 한다는 점을 체감하게 되었고, 퍼블리셔로서 완성된 프로젝트 이후에도 유지보수와 확장성을 고려하는 시각을 갖추게 되었습니다.",
        },
    ]);
    const [portfolioType, setPortfolioType] = useState([
        {
            name: "전체",
            isClick: true,
        },
        {
            name: "하드코딩",
            isClick: false,
        },
        {
            name: "프론트",
            isClick: false,
        },
    ]);

    const clickTypeCheck = portfolioType.find((item) => {
        return item.isClick;
    });
    const portfolioFilter = portfolioList.filter(
        (element) => element.workType === clickTypeCheck?.name,
    );

    return (
        <div className="w-[1120px] mx-auto py-[80px]">
            <div className="flex gap-[24px]">
                <div className="px-[30px] py-[20px] rounded-20px bg-white">
                    코드를 통해 구조와 경험을 설계하는 노종희입니다.
                </div>
                <ul className="flex gap-[10px] ">
                    <li className="w-[56px] h-[56px] relative group overflow-hidden transition-all duration-700 rounded-full hover:w-[250px]">
                        <a href="mailto:nohpaper99@naver.com" className="cursor-pointer">
                            <p className="w-[180px] h-[100%] flex items-center absolute top-0 left-0 pl-[72px] box-content rounded-40px text-[#4C4C4C] text-[14px] bg-beige-200 translate-x-[-200px] transition duration-700 group-hover:translate-x-0">
                                nohpaper99@naver.com
                            </p>
                            <span className="w-[56px] h-[56px] block absolute top-0 left-0 rounded-full bg-white bg-[url(../public/common/icon_mail.svg)] bg-cover"></span>
                        </a>
                    </li>
                    <li className="w-[56px] h-[56px] relative group overflow-hidden rounded-full hover:w-[180px]">
                        <a href="https://github.com/nohpaper/" className="cursor-pointer">
                            <p className="w-[110px] h-[100%] flex items-center absolute top-0 left-0 pl-[72px] box-content rounded-40px text-[#4C4C4C] text-[14px] bg-beige-200 translate-x-[-200px] transition duration-700 group-hover:translate-x-0">
                                github로 가기
                            </p>
                            <span className="w-[56px] h-[56px] block absolute top-0 left-0 rounded-full bg-white bg-[url(../public/common/icon_git.svg)] bg-cover"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex gap-[20px] items-start pt-[20px]">
                <div className="px-[30px] py-[20px] rounded-20px bg-white">
                    <p className="text-[16px] leading-[1.3]">
                        <b className="marker_yellow">
                            작업의 흐름을 예측하고, 이후 수정이나 유지보수까지 고려한 퍼블리싱을
                            지향
                        </b>
                        합니다. 효율적인 구현 방식을 고민하는 습관은 결과적으로 더 나은 사용자
                        경험과 협업으로 이어졌습니다. 5년간 다양한 프로젝트에서 퍼블리싱 전 과정을
                        책임지고 운영해보며 디자인과 개발 사이의 흐름을 조율해왔습니다.
                        <br />
                        <br />
                        인터랙션 구현, 컴포넌트 구조화, 일정 관리, 협업 커뮤니케이션까지 퍼블리싱의
                        시작부터 최종 전달까지 직접 수행한 경험을 바탕으로 코드와 사용자, 팀 모두를
                        고려한 퍼블리싱을 만들어가고 있습니다.
                        <br />
                        <br />
                        또한 HTML, CSS, JavsScript, Jquery 등 웹 퍼블리싱 기본 기술뿐만 아니라,
                        React, TypeScript, Redux, Zustand 등 프론트엔드 전반의 기술을 꾸준히
                        학습하며 개발자로서의 시야를 확장하고 있습니다. 이를 통해 단순한 화면 구현을
                        넘어, 유지보수성과 확장성을 고려한 코드 설계와 효율적인 개발 프로세스를
                        적용할 수 있습니다.
                    </p>
                </div>
                <div>
                    <div className="px-[30px] py-[20px] rounded-20px bg-white">
                        <div>
                            <span className="text-[#848484]">기술 스택</span>
                            <ul className="flex gap-[6px] flex-col pt-[10px]">
                                <li className="flex gap-[6px]">
                                    <p className="mark_style color_gray">HTML5</p>
                                    <p className="mark_style color_yellow">CSS</p>
                                    <p className="mark_style color_yellow">SCSS</p>
                                    <p className="mark_style color_purple">JavaScript</p>
                                    <p className="mark_style color_purple">JQuery</p>
                                </li>
                                <li className="flex gap-[6px]">
                                    <p className="mark_style color_bluepurple">REACT</p>
                                    <p className="mark_style color_bluepurple">TypeScript</p>
                                    <p className="mark_style color_yellow">Tailwind</p>
                                    <p className="mark_style color_purple">Redux</p>
                                </li>
                                <li className="flex gap-[6px]">
                                    <p className="mark_style color_brown">Gsap</p>
                                    <p className="mark_style color_brown">ScrollTrigger</p>
                                    <p className="mark_style color_green">Prettier</p>
                                    <p className="mark_style color_green">ESLint</p>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-[20px]">
                            <span className="text-[#848484]">사용 도구</span>
                            <ul className="pt-[10px]">
                                <li className="flex gap-[6px]">
                                    <p className="mark_style color_skyblue">VScode</p>
                                    <p className="mark_style color_skyblue">IntelliJ</p>
                                    <p className="mark_style color_skyblue">WebStorm</p>
                                    <p className="mark_style color_skyblue">Slack</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="px-[30px] py-[20px] mt-[20px] rounded-20px bg-white">
                        <li className="flex gap-[20px]">
                            <p className="min-w-[104px] text-nowrap">브라이어스</p>
                            <p className="min-w-[240px] text-nowrap">
                                2020. 01 ~ 2022. 01 (약 2년 1개월)
                            </p>
                            <p className="text-[#848484] text-nowrap">사원</p>
                        </li>
                        <li className="flex gap-[20px] pt-[20px]">
                            <p className="min-w-[104px] text-nowrap">앰플인터랙티브</p>
                            <p className="min-w-[240px] text-nowrap">
                                2022. 04 ~ 2025.06 (약 3년 2개월)
                            </p>
                            <p className="text-[#848484] text-nowrap">주임</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="relative">
                <ul className="flex gap-[40px] pt-[20px]">
                    {myDescription.map((item, index) => {
                        return (
                            <li className="min-w-[250px] rounded-40px bg-white" key={index}>
                                <button
                                    type="button"
                                    className={`w-[100%] h-[100%] block py-[20px] cursor-pointer text-center text-nowrap box-border rounded-40px  transition duration-150 hover:bg-beige-200 ${item.isContentView ? "border border-beige-300 bg-beige-200" : "border border-transparent bg-white"}`}
                                    onClick={() => {
                                        //모달팝업 열기
                                        const update = [...myDescription];
                                        for (
                                            let subIndex = 0;
                                            subIndex < update.length;
                                            subIndex++
                                        ) {
                                            update[subIndex].isContentView = false;
                                        }
                                        update[index].isContentView = true;
                                        setMyDescription(update);
                                    }}
                                >
                                    {item.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {myDescription.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`w-[100%] absolute top-[90px] left-0 flex gap-[10px] items-start px-[30px] py-[20px] box-border rounded-20px bg-white shadow-bulr ${item.isContentView ? "block" : "hidden"}`}
                        >
                            <p className="leading-[1.3] whitespace-pre-line flex-1">
                                {item.content}
                            </p>
                            <button
                                type="button"
                                className="w-[30px] h-[30px] block flex-shrink-0 cursor-pointer rounded-5px transition-all duration-150 bg-[url(../public/common/icon_close.svg)] bg-cover hover:bg-beige-200"
                                onClick={() => {
                                    //모달팝업 닫기
                                    const update = [...myDescription];
                                    update[index].isContentView = false;
                                    setMyDescription(update);
                                }}
                            ></button>
                        </div>
                    );
                })}
            </div>
            <div className="pt-[20px]">
                <ul className="w-[100%] flex justify-between">
                    {portfolioType.map((item, index) => {
                        return (
                            <li className="w-[33.3%] " key={index}>
                                <button
                                    type="button"
                                    className={`w-[100%] block py-[16px] cursor-pointer rounded-[20px_20px_0_0] text-center ${item.isClick ? "bg-beige-200" : "bg-transparent"}`}
                                    onClick={() => {
                                        console.log(item.isClick);
                                        const update = [...portfolioType];
                                        for (
                                            let subIndex = 0;
                                            subIndex < update.length;
                                            subIndex++
                                        ) {
                                            update[subIndex].isClick = false;
                                        }
                                        update[index].isClick = true;

                                        setPortfolioType(update);
                                    }}
                                >
                                    {item.name}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <ul className="px-[10px] py-[10px] rounded-[0_0_20px_20px] bg-beige-200">
                    {clickTypeCheck?.name === "하드코딩" || clickTypeCheck?.name === "프론트"
                        ? portfolioFilter.map((item, index) => {
                              return <PortfolioList item={item} index={index} />;
                          })
                        : portfolioList.map((item, index) => {
                              return <PortfolioList item={item} index={index} />;
                          })}
                </ul>
            </div>
        </div>
    );
}
