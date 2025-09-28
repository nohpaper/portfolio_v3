import { useParams } from "react-router-dom";
import { usePortfolioStore } from "../store/store.ts";
import { InfoNav } from "../assets/Fragment.tsx";

//slide 관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

export default function Golf() {
    const { name } = useParams<{ name: string }>();
    const portfolioList = usePortfolioStore((state) => state.list);

    return (
        <div className="w-[100%] bg-beige-100">
            <div className="w-[1120px] pb-[140px] mx-auto">
                <InfoNav name={name} list={portfolioList} />
                {/*    본문     */}
                <div className="pt-[236px]">
                    <h5 className="text-[16px] leading-[1.3]">
                        이 프로젝트는 하이브리드 앱 개발 프로젝트로, 모바일 전용 페이지를
                        퍼블리싱하는 업무를 맡았습니다. 퍼블리싱 초기 설계는 메인 작업자가
                        담당하였으며,
                        <b className="marker_yellow">
                            분배받은 작업 파트에 따라 일정에 맞춰 마크업 및 CSS 작업을 수행
                        </b>
                        했습니다. 개발사와의 직접적인 커뮤니케이션보다는 메인 퍼블리셔와의 조율을
                        통해 기능 구현과 컴포넌트 활용 방식 등을 협의하며 진행했습니다. 일부
                        인터랙션은 jQuery를 사용하여 기능 구현에도 참여하였습니다.
                    </h5>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            구조에 맞춘 마크업과 효율적인 준비
                        </h4>
                        <div className="pt-[6px]">
                            <Swiper
                                modules={[Scrollbar]}
                                slidesPerView={1}
                                scrollbar={{ draggable: true }}
                                autoHeight={true}
                            >
                                <SwiperSlide>
                                    <img src="../../src/assets/golf/1-1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/golf/1-2.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/golf/1-3.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            메인 작업자가 설계한 퍼블리싱 구조에 맞춰 마크업을 구성하였으며,
                            <b className="marker_yellow">
                                동일한 컴포넌트는 템플릿화하여 재사용이 용이하도록 사전 준비를
                                철저히 진행
                            </b>
                            했습니다. 이로 인해 작업 중 새로 투입된 인원이 있더라도 빠르게 적응할 수
                            있었고, 저 또한 전체적인 작업 속도를 높일 수 있었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            퍼블리셔 중심의 커뮤니케이션과 일정 조율
                        </h4>
                        <div className="pt-[6px]">
                            <img src="../../src/assets/golf/2.jpg" alt="" />
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            이 프로젝트에서는 메인 퍼블리셔가 PL(Project Leader)의 역할까지 겸하면서
                            디자인팀, 개발사와의 커뮤니케이션을 전담해주셨습니다.{" "}
                            <b className="marker_yellow">
                                일주일 단위로 작업 결과물을 개발사에 전달하는 구조로, 개발사가
                                우선순위를 정하면 디자인팀과 일정을 조율해 퍼블리싱 작업을 진행
                            </b>
                            했습니다. <br />
                            <br />
                            골프 모임 관련 하이브리드 앱 특성상 퍼블리싱에서 직접 구현하는 기능은
                            많지 않았지만, 개발사와 협의하여 가능한 기능은 jQuery로 작업하여
                            전달하기도 했습니다. 기획자는 구조 설계에만 관여하였고, 실질적인 진행은
                            메인 퍼블리셔가 담당하여 프로젝트 흐름을 자연스럽게 이끌었습니다. 이를
                            통해
                            <b className="marker_yellow">
                                PL 역할의 중요성과 프로젝트 리딩 방식에 대해 실무적으로 배울 수 있는
                                경험
                            </b>
                            이 되었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">협업 퍼블리싱의 이해와 성장</h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            이전 회사에서는 혼자서 전체 퍼블리싱을 담당하는 일이 많았기 때문에, 이번
                            프로젝트처럼 역할이 분담된 협업 환경에서의 퍼블리싱은 새로운 도전이자 큰
                            배움의 기회였습니다.{" "}
                            <b className="marker_yellow">
                                퍼블리셔로서 일정에 맞춰 작업을 분배받고, 기능 구현 범위 내에서
                                주도적으로 진행하며 협업의 중요성과 유연한 커뮤니케이션의 필요성을
                                깊이 느낄 수 있었습니다.
                            </b>
                            <br />
                            <br />
                            프로젝트를 함께한 메인 퍼블리셔는 다양한 프로젝트 경험을 바탕으로
                            퍼블리싱 구조 설계부터 일정 관리, 팀워크 조율까지 리더십을 발휘해주신
                            분이었습니다. 그분의 작업 방식을 가까이서 지켜보며 실무자의 리딩 방식,
                            협업할 때의 태도, 팀원 간 신뢰를 쌓는 커뮤니케이션 등에 대해 많은
                            인사이트를 얻었습니다.
                            <br />
                            <br />
                            앞으로 협업 프로젝트를 진행할 때 이 경험은 큰 자산이 될 것이라 자부하며,
                            추후 메인 퍼블리셔 역할을 맡게 된다면, 이번 프로젝트에서 배운 리딩
                            방식을 제 작업에도 적극적으로 녹여보고 싶다는 목표가 생겼습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
