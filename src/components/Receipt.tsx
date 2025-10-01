import { InfoNav } from "../assets/Fragment.tsx";
import { useParams } from "react-router-dom";
import { usePortfolioStore } from "../store/store.ts";

//slide 관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";

export default function Receipt() {
    const { name } = useParams<{ name: string }>();
    const portfolioList = usePortfolioStore((state) => state.list);

    return (
        <div className="w-[100%] bg-beige-100">
            <div className="w-[1120px] pb-[140px] mx-auto">
                <InfoNav name={name} list={portfolioList} index={0} isInitFixed={true} />
                {/*    본문     */}
                <div className="pt-[236px]">
                    <h5 className="text-[16px] leading-[1.3]">
                        이 프로젝트는 동일한 디자인을 기반으로 두 명의 퍼블리셔가 각각 구현을 진행한
                        병행 작업 형태의 프로젝트였습니다. 비록 최종 결과물로 선정되지는 않았지만,
                        <b className="marker_yellow">
                            GSAP과 ScrollTrigger 등 인터랙션 플러그인을 업무에 처음 적용한 경험으로,
                            저에게는 퍼블리셔 커리어의 중요한 전환점이 된 작업
                        </b>
                        입니다. 해당 작업을 통해 플러그인에 대한 이해도가 인터랙션의 완성도에
                        직접적으로 영향을 미친다는 점을 체감하였고, 이후 업무에서도 인터랙션 구현에
                        더 큰 관심과 방향성을 갖게 되는 계기가 되었습니다.
                    </h5>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            흔치 않은 기회, 퍼블리셔로서의 도전
                        </h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            해당 프로젝트는 디자인팀에서 제작한 인터랙션 중심 페이지를 기반으로, 두
                            명의 퍼블리셔가 각자 버전을 구현하는 방식으로 병행 진행되었습니다.
                            과장님께서 “이런 종류의 인터랙션 작업은 자주 접하기 어려운 경험”이라며
                            도전해보길 권유하셨고, 실무적으로도 큰 도움이 될 수 있는 기회라 판단하여
                            참여하게 되었습니다.
                            <b className="marker_yellow">
                                단순한 경쟁보다는 새로운 방식의 작업을 경험하고 성장하는 데에 중점을
                                두고 임했던 프로젝트
                            </b>
                            였습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            GSAP과 ScrollTrigger의 시행착오
                        </h4>
                        <div className="pt-[6px]">
                            <video
                                controls
                                muted
                                autoPlay
                                preload="none"
                                loop
                                poster="../../src/assets/receipt/1.jpg"
                            >
                                <source src="../../src/assets/receipt/1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            페이지는 섹션별로 화면 중앙에 위치하면 고정된 상태로 인터랙션이
                            실행되도록 구성되었으며, GSAP과 ScrollTrigger를 통해 이를 구현했습니다.
                            ScrollTrigger는 타임라인 생성 시 가상 스크롤을 만들어내는데, 처음 접한
                            이 구동 방식이 익숙치 않아 애를 먹었습니다. 인터랙션 전체를 먼저
                            작성하고 디버깅하는 방식으로 접근했으나, 가상 스크롤과 동작 타이밍 간의
                            미묘한 오차로 인해 예상치 못한 버그가 자주 발생했습니다. 이후에는
                            <b className="marker_yellow">
                                인터랙션을 한 줄씩 작성하고 매번 동작을 확인하며 작업하는 습관을
                                가지게 되었고, 이 방식이 결과적으로 더 효율적임을 체감
                            </b>
                            했습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            다양한 사용자 환경을 고려한 스크롤 세팅
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
                                    <img src="../../src/assets/receipt/2-1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/receipt/2-2.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            ScrollTrigger는 타임라인에 입력된 수치만큼 가상 스크롤 높이를
                            생성합니다. 이 높이는 브라우저 환경, 디바이스 스펙, 뷰포트 크기에 따라
                            달라질 수 있기 때문에 일관된 스크롤 경험을 제공하기 위해 수치 계산이
                            필요했습니다. 이에 따라
                            <b className="marker_yellow">
                                타임라인의 실행 시간을 기준으로 ScrollTrigger가 종료되는 시점을
                                계산하고, 그에 맞는 높이를 직접 입력해 가상 스크롤 환경을 제어
                            </b>
                            했습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            무한한 가능성과 현실 사이, 퍼블리셔의 균형감각
                        </h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            인터랙션은 단순히 “디자인 그대로 구현하는 것” 이상의 고민이 필요하다는
                            것을 깨달은 프로젝트였습니다. 실제 작업 당시 디자이너가 원하는 구성은
                            명확했고, 그것을 구현하는 것이 제 역할이라 생각했지만, 모든 요청을
                            무조건 반영할 수는 없다는 현실적인 제약도 마주했습니다. 이미지 레이어
                            분할 방식, 트리거 타이밍, 타임라인 구성 방식 등은 구현 방식에 따라 개발
                            리소스나 동작 안정성 측면에서 차이가 컸고, 결국 디자이너와의 타협이
                            필요하다는 것도 느끼게 되었습니다. 이 경험을 통해
                            <b className="marker_yellow">
                                퍼블리셔로서의 기술적 자신감뿐만 아니라, ‘어떤 제안을 하고 어떤
                                제한을 거는 것이 합리적인가’에 대한 기준도 생겼습니다.
                            </b>
                            <br />
                            <br />
                            이후 인터랙션이 중심이 된 프로젝트에서 메인 퍼블리셔로 투입되는 일이
                            많아졌으며, 이 경험이
                            <b className="marker_yellow">
                                제 커리어에서 인터랙션 퍼블리싱에 자신감을 가지게 된 중요한 계기
                            </b>
                            가 되었습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
