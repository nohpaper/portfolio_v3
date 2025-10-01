import { InfoNav } from "../assets/Fragment.tsx";
import { useParams } from "react-router-dom";
import { usePortfolioStore } from "../store/store.ts";

//slide 관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { useState, useEffect, useRef } from "react";

export default function Mabinogi() {
    const { name } = useParams<{ name: string }>();
    const portfolioList = usePortfolioStore((state) => state.list);
    const findIsPortfolio = portfolioList.find((element) => element.name === name);
    const multiWrap = useRef<HTMLDivElement>(null);

    //멀티 관련 타입과 변수
    interface MultiView {
        activeIndex: number;
        list: (boolean | null)[];
    }
    const [multiView, setMultiView] = useState<MultiView>({
        activeIndex: 1,
        list: [],
    });

    //탭 클릭 시 active false <=> true
    const multiClickActive = (index: number) => {
        const update = {
            ...multiView,
            list: [...multiView.list],
        };
        update.activeIndex = index;
        for (let subIndex = 0; subIndex < multiView.list.length; subIndex++) {
            if (subIndex > 0) {
                update.list[subIndex] = false;
            }
        }
        update.list[index] = true;
        setMultiView(update);
    };
    //클릭 시 스크롤이 멀티 offsetTop 으로 이동
    const multiClickScrollMove = () => {
        const multiButton = multiWrap.current && multiWrap.current.firstElementChild;
        const multiButtonHeight = multiButton?.clientHeight ?? 0;
        const multiWrapOffsetHeight = multiWrap.current?.offsetTop ?? 0;
        window.scrollTo({
            top: multiWrapOffsetHeight + multiButtonHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        //페이지 진입 시 store.ts 에 있는 내용을 확인하여 내용 삽입
        const init = { ...multiView, list: [...multiView.list] };
        init.list = new Array(findIsPortfolio?.multiTitle?.length).fill(false);
        init.list[0] = null; //0은 무조건 null
        init.list[1] = true; //1은 무조건 true
        setMultiView(init);

        //스크롤 위치에 따라 InfoNav 컴포넌트 fixed 여부 관리
        const handleScroll = () => {
            if (
                multiWrap.current?.offsetTop !== undefined &&
                multiWrap.current.firstElementChild !== undefined
            ) {
                const multiButton = multiWrap.current.firstElementChild;
                const multiButtonHeight = multiButton?.clientHeight ?? 0;
                const multiInfo = multiButton?.nextElementSibling;

                if (window.scrollY >= multiWrap.current?.offsetTop + multiButtonHeight) {
                    multiInfo?.classList.add("header_fixed");
                } else if (window.scrollY < multiWrap.current?.offsetTop + multiButtonHeight) {
                    multiInfo?.classList.remove("header_fixed");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-[100%] bg-beige-100">
            <div className="w-[1120px] relative pb-[140px] mx-auto">
                <InfoNav name={name} list={portfolioList} index={0} isInitFixed={true} />
                {/*    본문     */}
                <div className="pt-[236px]">
                    <h5 className="text-[16px] leading-[1.3]">
                        ‘마비노기’의 전투 시스템 중 하나인
                        <b className="marker_yellow">
                            콤보카드 시스템을 직관적으로 이해하고 실습해볼 수 있도록 제작한
                            시뮬레이터 웹앱 프로젝트
                        </b>
                        입니다.
                        <br />
                        콤보카드는 특정 스킬을 순서대로 사용했을 때 공격 대미지를 증가시키는
                        시스템이지만, 게임 내에 공식적인 시뮬레이터가 없어 처음 접하는 유저는 구조를
                        이해하기 어렵고, 실수 시 인게임 재화를 손해 볼 수 있는 구조입니다. 이를
                        해결하기 위해 실제 게임 UI와 기능을 참고하여, 콤보카드 제작 과정을 직접
                        실습해볼 수 있는 시뮬레이터를 React로 구현하였습니다. <br />본 프로젝트는
                        <b className="marker_yellow">
                            기획부터 디자인, 퍼블리싱 및 기능 구현까지 전 과정
                        </b>
                        을 단독으로 수행했으며, 특히 React를 활용한 첫 프로젝트로, 컴포넌트 기반
                        구조와 상태 관리 등 프론트엔드 구현의 실질적인 경험을 축적한 작업입니다.
                    </h5>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">프로젝트 목적과 제작 배경</h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            마비노기의 전투 시스템 중 하나인 ‘콤보카드’는 특정 스킬 조합을 순서대로
                            사용했을 때 공격력이 증가하는 구조로, 전투 효율에 큰 영향을 줍니다.
                            하지만 이 시스템은 게임 내에서도 별도의 시뮬레이터가 제공되지 않기
                            때문에,
                            <b className="marker_yellow">
                                처음 접하는 유저 입장에서는 구조가 다소 복잡하고 불투명하게 느껴질
                                수 있습니다.
                            </b>
                            실제 게임 플레이 중에도 정확한 조합을 알지 못한 채 콤보카드를 제작하면,
                            결과적으로 게임 내 재화를 낭비하거나 원하는 효과를 얻지 못하는 등의
                            손해가 발생하는 구조입니다. <br />
                            이러한 불편을 해소하고, 조합을 실험하고 결과를 검증할 수 있는 웹 기반
                            시뮬레이터를 구현하고자 프로젝트를 시작하게 되었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">UI 구성 및 시각화 전략</h4>
                        <div className="pt-[6px] text-[16px] leading-[1.3]">
                            <p>
                                단순한 기능 구현이 아니라, 사용자가 ‘직접 만지며’ 이해할 수 있는 UI
                                흐름을 설계하는 데 중점을 뒀습니다. 커스터마이징 영역은 실제 게임 내
                                UI 구조를 참고했고, 도움말은 게임 톤과 맞춰 직관적이고 간결하게
                                정리했습니다. 시뮬레이터는 실제 인게임과 유사한 로직을 따르되,
                                사용자가 구조를 이해하기 쉽게 흐름을 단순화하는 방식으로 UX를
                                구성했습니다.
                            </p>
                            <br />
                            <ul className="list-disc list-outside leading-[1.5]">
                                <li>사용자는 진입 시 스킬 입력창과 도움말을 확인</li>
                                <li>이후 ‘다음’ 버튼을 클릭하면 커스터마이징 화면으로 진입</li>
                                <li>직접 조작을 통해 자연스럽게 시스템을 익힐 수 있도록 유도</li>
                            </ul>
                            <br />
                            <p>
                                단순화를 시도하면서도 시스템 본질이 훼손되지 않도록 주의했으며, 실제
                                게임에서와 유사한 결과가 나와야 시뮬레이터로서의 가치가 있다고
                                판단해 로직 정확성도 유지했습니다.
                                <b className="marker_yellow">
                                    직접 만지며 이해할 수 있도록, 흐름과 시각 구조에 집중한 UI를
                                    설계
                                </b>
                                했습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative" ref={multiWrap}>
                    {findIsPortfolio !== undefined &&
                        findIsPortfolio.multiTitle !== undefined &&
                        findIsPortfolio.multiTitle.length > 0 && (
                            <ul className="flex gap-[10px] pt-[80px]">
                                {findIsPortfolio.multiTitle.map((item, index) => {
                                    if (index > 0) {
                                        return (
                                            <li key={index}>
                                                <button
                                                    type="button"
                                                    className="px-[30px] py-[20px] cursor-pointer border border-transparent rounded-40px bg-beige-200 transition-all duration-150 hover:underline hover:border-beige-300 "
                                                    onClick={() => {
                                                        multiClickActive(index);
                                                        multiClickScrollMove();
                                                    }}
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        )}
                    {findIsPortfolio !== undefined && findIsPortfolio.info.length > 0 && (
                        <InfoNav
                            name={name}
                            list={portfolioList}
                            index={multiView.activeIndex}
                            isInitFixed={false}
                        />
                    )}
                    {findIsPortfolio !== undefined && (
                        <ul className="pt-[236px] pb-[140px]">
                            {/*ver.1*/}
                            <li className={`${multiView.list[1] ? "block" : "hidden"} `}>
                                <div>
                                    <h4 className="text-[20px] leading-[1.3]">
                                        React 기반 구조 설계와 컴포넌트 단위 퍼블리싱
                                    </h4>
                                    <div className="pt-[6px]">
                                        <img src="../../src/assets/mabinogi/1-1.jpg" alt="" />
                                    </div>
                                    <p className="pt-[6px] text-[16px] leading-[1.3]">
                                        React를 공부하면서도 단순한 강의 따라하기가 아닌, 직접 써볼
                                        수 있는 사이드 프로젝트를 만들고자 했습니다. 프로젝트 선정
                                        기준은 ① 친숙한 주제일 것, ② 명확한 로직이 존재할 것 두
                                        가지였고, 이에 따라 평소 즐기던 게임 '마비노기'의 스킬
                                        시뮬레이터를 주제로 삼았습니다. <br />
                                        작업에 사용된 기술 스택은 React와 SCSS이며,&nbsp;
                                        <b className="marker_yellow">
                                            외부 라이브러리는 최대한 배제하고 React의 기능만으로
                                            구조를 구현하는 데 집중
                                        </b>
                                        했습니다.
                                        <br />
                                        입력/커스터마이징 화면에서 반복적으로 사용되는 데이터는
                                        최상위 컴포넌트에서 관리하고, 하위 컴포넌트에는 필요한
                                        데이터만 props로 전달하여 복잡도를 줄였습니다. React의 상태
                                        관리(useState)를 실제 작업에 적용하면서, 단순히 개념을
                                        외우는 것이 아닌 맥락에 따라 변형해 사용하는 감각을 익힐 수
                                        있었고, props를 넘기는 과정에서도 상황에 맞는 설계 판단이
                                        필요하다는 점을 체감했습니다.
                                    </p>
                                </div>
                                <div className="pt-[80px]">
                                    <h4 className="text-[20px] leading-[1.3]">
                                        사용자 입력값 유효성 검사 구현
                                    </h4>
                                    <div className="pt-[6px]">
                                        <Swiper
                                            modules={[Navigation, Scrollbar]}
                                            slidesPerView={1}
                                            navigation
                                            scrollbar={{ draggable: true }}
                                            autoHeight={true}
                                        >
                                            <SwiperSlide>
                                                <img
                                                    src="../../src/assets/mabinogi/1-2-1.jpg"
                                                    alt=""
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    src="../../src/assets/mabinogi/1-2-2.jpg"
                                                    alt=""
                                                />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="pt-[6px] text-[16px] leading-[1.3]">
                                        <p>
                                            스킬 조합 설정 과정에서 사용자 입력값을 검증하고, 조건을
                                            충족하지 않은 경우 적절한 피드백을 제공하는 유효성 검사
                                            로직을 구현하였습니다. 입력 누락이나 최소 조건 미달 시
                                            경고 메시지를 통해 오류를 사전에 방지하며, 모든 조건이
                                            만족될 때에만 다음 단계로 이동하도록 처리하여 사용자
                                            경험을 개선했습니다.
                                        </p>
                                        <br />
                                        주요 구현 내용:
                                        <ul className="list-disc list-outside leading-[1.5]">
                                            <li>
                                                스킬 입력란 중 하나라도 비어 있는 경우: "스킬 빈
                                                칸을 모두 입력해주세요" 알림
                                            </li>
                                            <li>
                                                선택된 콤보 카드 수가 2개 미만인 경우: "콤보 카드는
                                                최소 2칸 이상이어야 합니다" 알림
                                            </li>
                                            <li>
                                                조건문과 상태 변수(alertTrigger)를 활용한 흐름 제어
                                                및 중복 경고 방지
                                            </li>
                                            <li>
                                                입력값이 유효한 경우, 데이터를 배열로 정리해 상태로
                                                저장하고 다음 페이지로 이동
                                            </li>
                                        </ul>
                                        <br />
                                        <p>
                                            사용자 행동을 예측하여 실시간 피드백을 제공하고, 잘못된
                                            입력을 효과적으로 차단함으로써&nbsp;
                                            <b className="marker_yellow">
                                                UI/UX 관점에서의 안정성과 사용성을 동시에 확보
                                            </b>
                                            하였습니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-[80px]">
                                    <h4 className="text-[20px] leading-[1.3]">
                                        게임 시스템을 반영한 커스터마이징 시뮬레이터 기능 구현
                                    </h4>
                                    <div className="pt-[6px]">
                                        <Swiper
                                            modules={[Navigation, Scrollbar]}
                                            slidesPerView={1}
                                            navigation
                                            scrollbar={{ draggable: true }}
                                            autoHeight={true}
                                        >
                                            <SwiperSlide>
                                                <img
                                                    src="../../src/assets/mabinogi/1-3-1.jpg"
                                                    alt=""
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    src="../../src/assets/mabinogi/1-3-2.jpg"
                                                    alt=""
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    src="../../src/assets/mabinogi/1-3-3.jpg"
                                                    alt=""
                                                />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <p className="pt-[6px] text-[16px] leading-[1.3]">
                                        실제 게임 환경에서는 사용자가 스킬 커스터마이징을 진행할 때,
                                        각 스킬 구간별 누적 퍼센티지나 전체 소모 재화(뱃지)의 양을
                                        실시간으로 확인할 수 없습니다. 해당 프로젝트에서는 이러한
                                        실제 시스템의 한계를 보완하고, 사용자의 조합 결과를 명확하게
                                        시각화할 수 있도록&nbsp;
                                        <b className="marker_yellow">
                                            시뮬레이터 형태의 커스터마이징 기능을 직접 설계 및 구현
                                        </b>
                                        하였습니다.
                                        <br />
                                        <br />
                                        구간별 확률 기반 스킬 퍼센티지 적용, '한계 돌파' 조건의 랜덤
                                        수치 반영, 중복 스킬 사용 시 추가 재화 소모 등 게임 내부
                                        로직을 재현하는 데 중점을 두었습니다. 각 구간은 서로 다른
                                        퍼센티지 범위와 확률 조건을 가지고 있으며, 이를 수치로
                                        표현하기 위해 Math.random()을 활용한 확률 계산 로직, 배열을
                                        통한 누적 퍼센티지 계산, 조건문 기반 분기 처리를 통해 다양한
                                        상황을 시뮬레이션하였습니다.
                                        <br />
                                        <br />
                                        또한 React의 상태 관리 방식을 활용하여 사용자 상호작용 시
                                        실시간으로 변경되는 데이터 흐름을 관리하였고, 사용자의
                                        선택에 따라 퍼센티지 및 재화 소모량이 즉시 반영되도록
                                        구현하였습니다. 이 과정에서 스킬 중복 여부에 따른 비용 증가,
                                        누적된 수치들의&nbsp;
                                        <b className="marker_yellow">
                                            가시화 등 게임 내에서는 확인할 수 없는 정보를 보완적으로
                                            제공하는 UI 흐름
                                        </b>
                                        을 설계하는 데 집중했습니다.
                                    </p>
                                </div>
                                <div className="pt-[80px]">
                                    <h4 className="text-[20px] leading-[1.3]">
                                        불확실성 속에서도 완성을 향한 시도
                                    </h4>
                                    <p className="pt-[6px] text-[16px] leading-[1.3]">
                                        React를 본격적으로 사용하기 전까지는 HTML/CSS 기반 정적인
                                        작업 위주였기 때문에, 스스로 기획부터 구현까지 진행한다는
                                        것에 대한 불확실함도 있었습니다. 하지만 단지 이론 학습에
                                        머무르지 않고, 작더라도 완성할 수 있는 프로젝트를 직접
                                        기획하고 구현하며,&nbsp;
                                        <b className="marker_yellow">
                                            ‘완성까지 이끌어낸 경험 그 자체’가 가장 큰 성과
                                        </b>
                                        였습니다. Redux 등의 상태 관리 라이브러리를 사용하지 않았기
                                        때문에 어려운 점도 있었고, 그로 인해 구현 난이도가 올라간
                                        부분도 있었지만, 이번 프로젝트에서는 React 자체에 집중하고
                                        싶었기에 만족스럽게 마무리할 수 있었습니다.
                                    </p>
                                </div>
                                <div className="pt-[80px]">
                                    <h4 className="text-[20px] leading-[1.3]">
                                        직접 설계하고 연결해본 첫 인터랙티브 로직 구현의 경험
                                    </h4>
                                    <p className="pt-[6px] text-[16px] leading-[1.3]">
                                        처음이라 오류도 많았고, 부족한 부분도 분명히 존재했습니다.
                                        하지만 그만큼&nbsp;
                                        <b className="marker_yellow">
                                            단순한 기술 구현을 넘어서 사용자 흐름, 로직, 컴포넌트
                                            구조까지 전반을 스스로 설계하고 연결
                                        </b>
                                        해보았다는 점에서 큰 의미가 있는 프로젝트였습니다.
                                        <br />
                                        <br />
                                        기획적으로는 "게임 내에서 사용자가 알 수 없는 정보"를 어떻게
                                        보여줄 수 있을지를 고민했고, 개발적으로는 구간별 조건과
                                        확률, 누적 퍼센티지 계산, 중복 스킬 처리, 실시간 상태 반영
                                        등의 로직을 React를 통해 직접 구성해보았습니다. 익숙하지
                                        않은 기술임에도 불구하고 하나의 사용자 흐름 안에서 입력,
                                        계산, 출력이 자연스럽게 연결되도록 구현하며 로직의 구조화와
                                        상태 흐름에 대해 많이 배울 수 있었습니다. UI 관점에서는
                                        단순히 보이는 것뿐 아니라 사용자가 예측할 수 없던 값을 예측
                                        가능하게 만들고, 직관적인 피드백을 줄 수 있는 인터페이스를
                                        어떻게 설계할 것인가에 집중했습니다. 퍼블리셔로서의 경험을
                                        기반으로 사용자 입장에서의 조작 흐름을 우선시하면서, 그에
                                        맞는 로직과 데이터 처리를 처음부터 끝까지 연결한
                                        작업이었습니다.
                                        <br />
                                        <br />
                                        향후에는 Redux 또는 Context API 등 보다 구조적인 상태 관리
                                        도구를 도입하거나, 반응형 대응 및 접근성 개선, 시각적 결과
                                        피드백(예: 그래프, 이펙트 등) 기능을 추가하여, 단순
                                        시뮬레이터를 넘어선 사용자 중심 도구로 확장시켜보고
                                        싶습니다.
                                    </p>
                                </div>
                            </li>
                            {/*ver.2*/}
                            <li className={`${multiView.list[2] ? "block" : "hidden"}`}>
                                <div>
                                    <h4 className="text-[20px] leading-[1.3]">
                                        스킬 데이터 구조 개선을 통한 UI 연동 최적화 및 유지보수
                                        편의성 향상
                                    </h4>
                                    <div className="pt-[6px]">
                                        <Swiper
                                            modules={[Navigation, Scrollbar]}
                                            slidesPerView={1}
                                            navigation
                                            scrollbar={{ draggable: true }}
                                            autoHeight={true}
                                        >
                                            <SwiperSlide>
                                                <img
                                                    src="../../src/assets/mabinogi/2-1-1.jpg"
                                                    alt=""
                                                    className="w-[70%] block mx-auto"
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    src="../../src/assets/mabinogi/2-1-2.jpg"
                                                    alt=""
                                                    className="w-[70%] block mx-auto"
                                                />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <p className="pt-[6px] text-[16px] leading-[1.3]">
                                        기존에는 스킬 정보를 단순한 문자열 배열로 구성하여 관리하고
                                        있었기 때문에, UI 출력 시 스킬명과 데이터 키값을 분리해
                                        처리해야 하는 번거로움이 있었고, 추후 기능 확장이나 조건
                                        분기 처리에도 제약이 발생했습니다. 이를 해결하기 위해 Redux
                                        Toolkit의 createSlice를 사용하여 각 스킬을 한글명(name)과
                                        영문 키값(englishName)으로 구성된 객체 형태로 정의하였고,
                                        이를 배열로 관리하는 구조로 개선하였습니다. 이 구조는 UI에
                                        스킬명을 직접 노출하거나, 조건부 클래스 처리, 다국어 대응,
                                        접근성 속성 제어 등 퍼블리싱 작업 전반에서 코드의 가독성과
                                        처리 효율을 높이는 데 큰 도움이 되었습니다.
                                        <br />
                                        <br />
                                        또한, 사용자 입력값을 관리하는 데이터(comboData)도 slice로
                                        분리하여 상태를 명확하게 정의하고, 입력된 스킬과 퍼센트
                                        정보를 고유 ID와 함께 배열로 저장하는 구조를 구성하였습니다.
                                        이를 통해 페이지 이동 시 필요한 데이터 초기화, 추가, 삭제
                                        작업이 간결하게 처리되었으며, 데이터 흐름의 일관성과
                                        유지보수성도 크게 향상되었습니다. 특히,&nbsp;
                                        <b className="marker_yellow">
                                            스킬 데이터를 단순 배열이 아닌 구조화된 객체 형태로
                                            재설계함으로써 UI와 데이터 간의 연동을 더욱 유연하게
                                            만들고, 전체 퍼블리싱 로직의 안정성과 확장성을 확보한
                                            점이 핵심적인 개선 사항
                                        </b>
                                        입니다.
                                    </p>
                                </div>
                                <div className="pt-[80px]">
                                    <h4 className="text-[20px] leading-[1.3]">
                                        입력값 검증을 통한 데이터 신뢰성 확보 로직 구현
                                    </h4>
                                    <div className="pt-[6px]">
                                        <img
                                            src="../../src/assets/mabinogi/2-1-1.jpg"
                                            alt=""
                                            className="w-[70%] block mx-auto"
                                        />
                                    </div>
                                    <p className="pt-[6px] text-[16px] leading-[1.3]">
                                        사용자의 입력값에 따라 페이지 이동 여부를 제어하는 유효성
                                        검사 로직을 구현하였으며, 입력 조건에 따라 다양한 분기
                                        처리를 통해 데이터의 정확성과 사용자 경험을 모두
                                        고려했습니다. 최소 두 개 이상의 항목이 활성화되어야 하며, 각
                                        항목에는 누락 없이 스킬이 입력되어야 다음 단계로 진행할 수
                                        있도록 설정했습니다. 퍼센트 값은 모두 입력하거나 모두 비워야
                                        하며, 입력된 값이 있다면 앞의 값보다 뒤의 값이 더 커야
                                        유효한 것으로 판단됩니다. 모든 조건을 만족하지 않을 경우,
                                        제출 동작을 차단하고 알림 메시지를 통해 사용자가 즉시
                                        인지하고 수정할 수 있도록 했습니다. 특히&nbsp;
                                        <b className="marker_yellow">
                                            퍼센트 값이 순차적으로 증가하는지 검사하여, 데이터의
                                            논리적 흐름을 보장한 점
                                        </b>
                                        은 사용자 입력의 신뢰성을 확보하는 데 있어 핵심적인 요소로
                                        작용했습니다. 이 과정을 통해 복잡한 조건에서도 명확한 흐름
                                        제어와 사용자 중심의 인터페이스를 구현할 수 있었습니다.
                                    </p>
                                </div>
                                <div className="pt-[80px]">
                                    <h4 className="text-[20px] leading-[1.3]">
                                        스킬 데이터 구조 개선 및 Redux 상태 관리 최적화
                                    </h4>
                                    <p className="pt-[6px] text-[16px] leading-[1.3]">
                                        이번 프로젝트에서는 기존 단순 배열로 관리되던 스킬 데이터를
                                        객체 기반 구조로 전환하고, Redux를 활용하여 상태 관리를
                                        체계적으로 구현했습니다. 각 스킬에 한글명과 고유 영문 키를
                                        부여함으로써, UI와 데이터 간 연동이 훨씬 직관적이고
                                        유연해졌습니다. 이로 인해 조건부 렌더링, 다국어 대응, 스타일
                                        제어 등 다양한 퍼블리싱 요구사항을 코드 내에서 효과적으로
                                        처리할 수 있었으며, 유지보수성과 확장성을 크게
                                        향상시켰습니다. <br />
                                        또한, 사용자 입력값 관리도 Redux 상태로 분리해 데이터 흐름을
                                        명확히 하고, 페이지 이동이나 데이터 초기화, 추가·삭제 등의
                                        작업을 안정적으로 처리할 수 있게 되었습니다. 복잡한 UI 상태
                                        변화도 효율적으로 제어할 수 있었으며,&nbsp;
                                        <b className="marker_yellow">
                                            퍼블리싱 관점에서 데이터와 UI 간 연결 구조를 이해하고
                                            개선하는 능력을 키우는 데 큰 도움
                                        </b>
                                        이 되었습니다.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
                {findIsPortfolio?.isMulti && (
                    <div className="absolute left-[100%]">
                        <ul className="fixed top-[350px] pl-[10px]">
                            {findIsPortfolio.multiTitle?.map((item, index) => {
                                if (index === 0) {
                                    return (
                                        <li
                                            key={index}
                                            className="w-[100%] h-[35px] flex justify-center items-center px-[20px] rounded-20px border border-transparent cursor-pointer transition-all duration-150 bg-transparent hover:border-beige-300 hover:bg-white"
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                });
                                            }}
                                        >
                                            Top
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li
                                            key={index}
                                            className="w-[100%] h-[35px] relative group px-[20px] mt-[10px] rounded-20px overflow-hidden cursor-pointer bg-transparent"
                                            onClick={() => {
                                                multiClickActive(index);
                                                multiClickScrollMove();
                                            }}
                                        >
                                            <span className="w-[100%] h-[100%] flex justify-center items-center absolute top-0 left-0 transition-all duration-700 group-hover:left-[100%]">
                                                ㅡ
                                            </span>
                                            <span className="w-[100%] h-[100%] flex justify-center items-center absolute top-0 left-[100%] rounded-20px border border-transparent transition-all duration-700 group-hover:left-0 group-hover:border-beige-300 group-hover:bg-white">
                                                {item}
                                            </span>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
