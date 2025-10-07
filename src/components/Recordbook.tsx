import { InfoNav } from "../assets/Fragment.tsx";
import { useParams } from "react-router-dom";
import { usePortfolioStore } from "../store/store.ts";

//slide 관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";

export default function Recordbook() {
    const { name } = useParams<{ name: string }>();
    const portfolioList = usePortfolioStore((state) => state.list);

    return (
        <div className="w-[100%] bg-beige-100">
            <div className="w-[1120px] pb-[140px] mx-auto">
                <InfoNav name={name} list={portfolioList} index={0} isInitFixed={true} />
                {/*    본문     */}
                <div className="pt-[236px]">
                    <h5 className="text-[16px] leading-[1.3]">
                        React 프로젝트 기획 단계에서 외부 API나 서버 없이도 기능적 완성도를 높일 수
                        있는 주제를 고민하던 중, 이전에 사용했던 구글 스프레드시트 기반 가계부에서
                        아이디어를 얻어 사용성과 데이터 흐름을 직접 설계하는 형태의 가계부
                        프로젝트를 시작하게 되었습니다.
                        <br />
                        <br />
                        수입/지출 항목을 입력하는 기본 기능뿐 아니라, 날짜별(오늘, 이번 주, 이번 달)
                        통계 분류와 이전 달 데이터 이관, 카테고리별 사용 이력 정렬 등의 고도화된
                        로직까지 구현하여&nbsp;
                        <b className="marker_yellow">
                            사용자 경험(UX)과 데이터 유지 관점 모두를 고려한 구조로 설계
                        </b>
                        했습니다. 이전에 진행했던 투두리스트 기반 UI 프로젝트에서 컴포넌트 분리,
                        상태 제어, 데이터 흐름 처리에 대한 감각을 먼저 쌓았고, 이를 토대로 본
                        프로젝트에서는 상태관리 중심의 로직 구조화, 제네릭 타입 설계, UI-로직 완전
                        분리 등의 구조적 안정성을 강화한 것이 특징입니다.
                    </h5>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">로직 기획과 방향성 유지</h4>
                        <div className="pt-[6px]">
                            <Swiper
                                modules={[Navigation, Scrollbar]}
                                slidesPerView={1}
                                navigation
                                scrollbar={{ draggable: true }}
                                autoHeight={true}
                            >
                                <SwiperSlide>
                                    <img src="../../src/assets/recordbook/1-1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/recordbook/1-2.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/recordbook/1-3.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            구글 스프레드시트에서 아이디어를 얻어, 수입과 지출 데이터를
                            날짜별·카테고리별로 시각화할 수 있는 구조가 필요하다고 판단했습니다.
                            가계부 특성상 사용자가 직접 금액을 입력하고 카테고리에 맞춰 분류할 수
                            있는 인터페이스가 중요하다고 보았고, 이에 따라 입력 기능과 데이터
                            시각화가 연계되는 구조로 작업 방향을 설정했습니다. 프로젝트는 입력창과
                            카테고리 기준의 리스트(날짜별·카테고리별)로 구성되었으며, 전체적인 UI는
                            정보를 명확하게 보여줄 수 있도록 대시보드 형태의 구조에서 착안했습니다.
                            <br />
                            <br />
                            이전 프로젝트에서도 기능과 로직에 대한 사전 기획을 진행했던 경험이
                            있었고, 이를 통해 기획이 얼마나 중요한지 체감했기 때문에 이번에도 같은
                            방식으로 접근했습니다. 로직 설계에 대한 전문적인 경험은 부족할 수
                            있지만, 방향성을 잃지 않기 위해 기획 단계에 공을 들여 방향을 명확히
                            잡았습니다 결과적으로&nbsp;
                            <b className="marker_yellow">
                                로직 설계가 유연하게 변경되더라도 전체 흐름을 유지하며 작업
                            </b>
                            할 수 있었고, 기획 단계에서의 오차도 줄일 수 있었습니다.
                            <br />
                            <br />
                            작업 기획은 화면 구성 중심의 기능 기획과 별도로, 내부 로직(state 흐름
                            등)의 작동 방식을 정리하는 두 방향으로 나누어 진행했습니다. 이러한 방식
                            덕분에 전체 구조를 더 명확하게 파악할 수 있었고, 실제 개발 단계에서도
                            혼란 없이 안정적으로 작업을 이어갈 수 있었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            날짜 기반 상태 초기화 및 자동 이관 로직 구현
                        </h4>
                        <div className="pt-[6px]">
                            <img src="../../src/assets/recordbook/2.jpg" alt="" />
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            가계부라는 특성상 사용자의 수입/지출 데이터를 단발성으로 처리하는 것이
                            아니라, 날짜 단위(오늘, 주간, 월간)로 누적 집계하며, 매월 주기가 바뀔
                            때도 이전 데이터를 확인하거나 이어서 기록하는 경험이 중요합니다.
                            <br />
                            이를 위해 Zustand 스토어 내부에 날짜 기반 로직을 통합한 initUpdate()
                            메서드를 구성하고, 현재 날짜를 기준으로 상태를 초기화하거나, 월이 바뀌면
                            지난 달 데이터를 lastMonth로 이관한 뒤 현재 월 데이터를 초기화하는
                            구조를 설계했습니다. 이러한 흐름은 단순히 메모리 상에서만 작동하는 것이
                            아니라 Zustand의 persist 미들웨어를 통해&nbsp;
                            <b className="marker_yellow">
                                전체 상태를 로컬스토리지에 저장하고, 앱 재실행 시에도 기존 데이터를
                                불러와 이어서 보여줄 수 있도록 처리
                            </b>
                            하였습니다.
                            <br />
                            따라서 사용자는 앱을 새로고침하거나 브라우저를 닫아도 데이터가 유지되며,
                            새로운 달이 시작되면 로직이 자동으로 동작하여 지난 달 데이터는 보존한 채
                            이번 달부터 새롭게 기록할 수 있도록 UX 흐름을 구성했습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            제네릭을 활용한 타입 안정성 및 유연한 데이터 구조 설계
                        </h4>
                        <div className="pt-[6px]">
                            <img src="../../src/assets/recordbook/3.jpg" alt="" />
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            TypeScript를 기반으로 상태 관리와 데이터 흐름을 설계하면서, 데이터
                            구조가 고정되지 않고 상황에 따라 다르게 활용될 수 있는 부분이 있어
                            제네릭(Generic)을 활용해 타입을 구성했습니다. 예를 들어, 날짜별로
                            데이터를 그룹핑하는 DateGroupType이나 DateGroupUseType 등에서는
                            수입/지출 데이터를 문자열 또는 문자열 배열로 관리하는 경우가 있어, 해당
                            타입의 유연성을 확보하고자 제네릭으로 설계하였고, 이를 통해 오늘은
                            &lt;문자열 단일 값&gt;, 이번 달은 &lt;주차별 배열&gt;처럼 유동적인
                            데이터 타입도 오류 없이 처리할 수 있었습니다.
                            <br />
                            또한, 수입/지출 카테고리를 함께 관리하면서 객체 내부의 데이터가 깊어지는
                            구조를 안전하게 컨트롤할 수 있어&nbsp;
                            <b className="marker_yellow">
                                작성 도중 발생할 수 있는 런타임 오류나 잘못된 접근을 줄이는 데에도
                                도움이 되었습니다.
                            </b>
                            &nbsp; 특별한 복잡한 개념보다는, 사용하게 되는 데이터가 점점
                            구조화되면서 자연스럽게 제네릭의 필요성을 느꼈고, 그 흐름에 맞춰
                            적용해가며 구조를 정리했습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            상태 관리와 비즈니스 로직을 한 곳에서 깔끔하게 관리하기
                        </h4>
                        <div className="pt-[6px]">
                            <img src="../../src/assets/recordbook/4.jpg" alt="" />
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            이번 프로젝트에서는 Zustand를 사용해 상태 관리와 비즈니스 로직을 한 곳에
                            집중시켰습니다. 상태와 상태를 변경하는 함수들이 같은 공간에 모여 있어,
                            필요한 컴포넌트만 선택적으로 구독할 수 있고, 불필요한 리렌더링을
                            최소화할 수 있었습니다.
                            <br />
                            또한,&nbsp;
                            <b className="marker_yellow">
                                로컬스토리지와 연동해 상태를 영구 저장함으로써 페이지 새로고침이나
                                브라우저 종료 후에도 데이터를 유지
                            </b>
                            할 수 있도록 했습니다. 매달 새롭게 데이터를 입력해도 이전 데이터와
                            연결되어 누적된 통계를 계속 확인할 수 있습니다.
                            <br />
                            날짜에 따라 데이터를 자동 초기화하거나 이전 달 데이터를 자동 이관하는
                            복잡한 로직도 Zustang 내부에서 효율적으로 처리해, UI 컴포넌트는
                            렌더링에만 집중할 수 있도록 설계했습니다. 이처럼 상태 관리와 핵심 로직을
                            한 곳에 모아 관리한 구조는 유지보수성과 성능 최적화에 큰 장점을
                            제공했습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            사용자 행동에 기반한 카테고리 자동 정렬 기능
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
                                    <img src="../../src/assets/recordbook/5-1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/recordbook/5-2.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            사용자가 가계부에 데이터를 입력할 때, 함께 선택한 카테고리 정보가
                            Zustand 상태 관리로 전송됩니다. 이 과정에서 해당 카테고리의 useLength
                            값이 증가하며, 내부 상태에서 카테고리들이 사용 빈도 순으로 자동
                            정렬됩니다.
                            <br />이 기능은 화면에 보여지는 카테고리 정렬을 위한 별도의 로직이
                            아니라, 상태 관리 단계에서&nbsp;
                            <b className="marker_yellow">
                                사용자의 입력 데이터를 바탕으로 카테고리 순서가 실시간으로 유지
                            </b>
                            되도록 구현된 점이 핵심입니다. 덕분에 자주 사용하는 카테고리가 상단에
                            노출되어 자연스럽고 효율적인 사용자 경험을 제공합니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            데이터 흐름 중심의 구조 설계와 기술적 확장 경험
                        </h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            이번 프로젝트를 진행하면서 가장 중점을 둔 부분은 데이터가 어떻게 흐르고,
                            저장되며, 갱신되는가에 대한 구조적인 고민이었습니다. 기능을 단순히
                            구현하는 것에서 나아가, 사용자의 흐름과 데이터의 생명 주기를 고려해
                            상태를 설계하고 다듬는 과정을 통해, 로직이 점차 정돈되어 가는 경험을 할
                            수 있었습니다.
                            <br /> 특히 날짜를 기반으로 구분되는 데이터의 초기화나 누적 처리 등의
                            조건 분기 로직을 구성하면서,&nbsp;
                            <b className="marker_yellow">
                                사용자 행위에 맞춰 상태가 자연스럽게 갱신될 수 있도록 설계
                            </b>
                            하는 데 집중했습니다. 매달 새롭게 데이터를 입력하더라도 이전 정보와
                            유기적으로 이어질 수 있도록 구현했고, 이를 통해 로직이 단절되지 않고
                            안정적으로 작동하는 구조를 구성할 수 있었습니다.
                            <br />
                            <br />
                            또한 다양한 조건에 따라 데이터를 유연하게 재구성해야 했기 때문에, 상태의
                            정의 방식이나 데이터 간 의존성에 대한 판단력을 기를 수 있었습니다.
                            이러한 고민을 거치며 복잡한 데이터 흐름을 보다 명확하게 설계하는 데
                            필요한 감각과 기준을 쌓을 수 있었다고 생각합니다. 무엇보다도 초기
                            구상부터 UI 구성, 상태 관리, 데이터 구조화까지의 전 과정을 직접 풀어가며
                            작업함으로써,&nbsp;
                            <b className="marker_yellow">
                                단편적인 기술 구현을 넘어서 전체 흐름을 설계하고 구현하는 경험
                            </b>
                            을 할 수 있었습니다. 이 과정은 이후 더 복잡한 프론트엔드 구조나 상태
                            설계가 필요한 프로젝트에서도 큰 기반이 되어줄 것으로 기대하고 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
