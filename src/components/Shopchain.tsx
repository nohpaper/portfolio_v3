import { InfoNav } from "../assets/Fragment.tsx";
import { useParams } from "react-router-dom";
import { usePortfolioStore } from "../store/store.ts";

//이미지 관련
import image1_1 from "../../src/assets/shopchain/1-1.jpg";
import video1_1 from "../../src/assets/shopchain/1-1.mp4";
import image1_2 from "../../src/assets/shopchain/1-2.jpg";
import image1_3 from "../../src/assets/shopchain/1-3.jpg";
import image1_4 from "../../src/assets/shopchain/1-4.jpg";
import image4 from "../../src/assets/shopchain/4.gif";
import image5_1 from "../../src/assets/shopchain/5-1.jpg";
import video5_1 from "../../src/assets/shopchain/5-1.mp4";
import image5_2 from "../../src/assets/shopchain/5-2.jpg";

//slide 관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

export default function Shopchain() {
    const { name } = useParams<{ name: string }>();
    const portfolioList = usePortfolioStore((state) => state.list);

    return (
        <div className="w-[100%] bg-beige-100">
            <div className="w-[1120px] pb-[140px] mx-auto">
                <InfoNav name={name} list={portfolioList} index={0} isInitFixed={true} />
                {/*    본문     */}
                <div className="pt-[236px]">
                    <h5 className="text-[16px] leading-[1.3]">
                        <b className="marker_yellow">
                            퍼블리싱 리더로서 리뉴얼 사이트의 퍼블리싱을 단독으로 수행
                        </b>
                        하며, 디자인팀 및 외부 개발사와 협업해 전체 퍼블리싱을 책임졌습니다. 이
                        프로젝트는 결제 단말기, 키오스크 등 오프라인 환경에서 사용되는 디바이스를
                        제작·공급하는 기업의 웹사이트 리뉴얼 작업으로, 복잡하지 않고 직관적인 정보
                        전달이 중요한 과제였습니다. 이에 따라 사용자가 빠르게 핵심 정보를 인지할 수
                        있도록 임팩트 있는 인터랙션을 활용한 퍼블리싱 구조를 설계하였고, 페이지별
                        공통 요소는 사전 정리 후 디자인팀과 방향을 조율하며 진행했습니다. 구현
                        난이도가 높지는 않았지만, 일정이 소요되는 페이지는 개발사로부터 사전 공유를
                        받아 우선순위로 작업했고, 전체 일정에 맞춰 산출물을 안정적으로
                        전달하였습니다.
                    </h5>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            사용자 중심 구조 설계와 퍼블리싱 전략
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
                                    <video
                                        controls
                                        muted
                                        autoPlay
                                        preload="none"
                                        loop
                                        poster={image1_1}
                                    >
                                        <source src={video1_1} type="video/mp4" />
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image1_2} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image1_3} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image1_4} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            정보 중심의 레이아웃으로 재정비하고 사용자 시선을 효과적으로 유도할 수
                            있는 인터랙션 요소를 적극 도입하였습니다. 디자인이 확정되기 전, 전체
                            레이아웃을 기준으로 공통 구조를 미리 분석하여 퍼블리싱 가이드를
                            선제작했고, 이를 바탕으로 반복 가능한 요소를 컴포넌트화하여 유지보수성과
                            재사용성을 확보했습니다. <br />
                            <br />
                            특히 주요 레이아웃이 정리된 시점부터 퍼블리싱의 뼈대를 컴포넌트 기반으로
                            세팅하였으며, 개발사 요청에 따라 우선 작업이 필요한 페이지를 먼저
                            대응하고, 인터랙션 중심의 페이지는 후순위로 배치하는 방식으로 전체
                            일정을 유연하게 조율했습니다. 이렇게 구조적 설계와 우선순위 기반의 작업
                            전략을 통해&nbsp;
                            <b className="marker_yellow">
                                작업 효율성과 결과물의 일관성을 모두 확보
                            </b>
                            할 수 있었고, 사용자가 핵심 정보에 빠르게 접근할 수 있도록 콘텐츠 흐름도
                            함께 최적화하였습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            명확한 커뮤니케이션이 만든 효율적 협업
                        </h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            디자인팀은 인터랙션의 중요도와 구현 가능성에 대한 이해가 높아, 모션팀 및
                            클라이언트와의 협의를 선행한 뒤 구체적인 방향을 퍼블리싱에
                            전달해주었습니다. 구현 단계에서도 모호한 부분은 사전에 문의하고, 구현
                            불가 항목은 빠르게 배제함으로써 효율적인 업무 진행이 가능했습니다.
                            이러한 협업을 통해&nbsp;
                            <b className="marker_yellow">
                                서로의 역할뿐 아니라 타 직군에 대한 이해가 프로젝트 효율성을
                                높인다는 점을 체감
                            </b>
                            했으며, 책임의식 있는 커뮤니케이션이 안정적인 결과로 이어졌습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            일정 리스크 최소화를 위한 개발사 협업
                        </h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            프로젝트 리더(PL) 및 개발사와의 사전 협의를 통해 전체 개발 범위와 일정에
                            대해 명확히 조율한 상태였으며, 각 산출물 전달 시에는 작업 가이드와 함께
                            수정 또는 보완이 필요한 부분에 대해 즉각적인 피드백을 요청했습니다. 일정
                            지연이 우려되는 페이지는 사전 대응하고, 개발팀과의 지속적인
                            커뮤니케이션을 통해 전체 일정을 안정적으로 유지할 수 있었습니다.&nbsp;
                            <b className="marker_yellow">
                                산출물 검수 또한 정리된 기준에 따라 진행되어 재작업이나 혼선 없이
                                마무리
                            </b>
                            되었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">카드 콘텐츠 인터랙션 구현</h4>
                        <div className="pt-[6px]">
                            <img src={image4} alt="" />
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            사용자 주목도가 높은 카드 콘텐츠 영역에 대해, GSAP과 ScrollTrigger를
                            활용해 스크롤에 반응하는 카드 전개 애니메이션을 구현했습니다. 각각의
                            카드 요소는 스크롤 위치에 따라 좌우 이동 및 회전되며, 사용자의 스크롤에
                            자연스럽게 동기화되어 콘텐츠의 시각적 집중도를 높일 수 있도록
                            구성하였습니다. <br /> 코드는 .open_card_wrap 내의 li 요소 4개에 대해,
                            인덱스별로 위치와 회전값을 달리 적용해 시각적으로 리듬감 있는 연출을
                            유도한 부분입니다. 스크롤에 따라 콘텐츠가 살아 움직이는 듯한 경험을
                            제공함으로써,&nbsp;
                            <b className="marker_yellow">
                                정적인 콘텐츠에 몰입감을 더하고, 브랜드의 역동적인 성격을 효과적으로
                                전달
                            </b>
                            할 수 있었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">제품 기능 시뮬레이션 인터랙션</h4>
                        <div className="pt-[6px]">
                            <Swiper
                                modules={[Navigation, Scrollbar]}
                                slidesPerView={1}
                                navigation
                                scrollbar={{ draggable: true }}
                                autoHeight={true}
                            >
                                <SwiperSlide>
                                    <video
                                        controls
                                        muted
                                        autoPlay
                                        preload="none"
                                        loop
                                        poster={image5_1}
                                    >
                                        <source src={video5_1} type="video/mp4" />
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image5_2} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            제품의 기능을 직관적으로 전달하기 위해 Lottie 애니메이션과
                            ScrollTrigger를 결합하여, 사용자의 스크롤 동작에 맞춰 제품이 실제로
                            작동하는 듯한 시각적 연출을 구현했습니다. 이와 동시에, 각 기능에 맞는
                            설명 문구를 타이밍에 맞춰 순차적으로 노출하여, 사용자에게 제품의 흐름을
                            자연스럽게 안내하는 구조로 설계하였습니다. 특히 .json_wrap 영역은 고정된
                            상태로 애니메이션을 재생하며, Lottie 애니메이션의 움직임과 텍스트의
                            autoAlpha 전환을 timeline으로 정밀하게 동기화하여 몰입감 있는 사용
                            경험을 제공합니다.
                            <br />
                            제품의 복잡한 기능 설명을&nbsp;
                            <b className="marker_yellow">
                                단순 텍스트 대신 시각적 시뮬레이션으로 전환함으로써, 브랜드의
                                기술력과 사용자 친화성을 동시에 강조
                            </b>
                            할 수 있었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            구조적 사고와 인터랙션 경험의 확장
                        </h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            이번 프로젝트는 처음부터 끝까지 퍼블리싱 리딩을 단독으로 수행하며,
                            퍼블리싱의 전체 과정을 직접 기획하고 관리한 경험이었습니다. 특히 리뉴얼
                            과정에서는 사용자 경험과 기술적 구현 사이의 균형을 고려해 인터랙션
                            구조를 설계하고, 디자인팀과의 긴밀한 협업을 통해 실현 가능하면서도
                            브랜드 메시지를 강화할 수 있는 인터랙션을 효과적으로 구현하였습니다.
                            <br />
                            <br />
                            스크롤 트리거 기반의 카드 인터랙션을 통해 콘텐츠에 시각적 리듬감을
                            부여하고, 정적인 정보 전달 방식을 탈피하여 몰입감 있는 사용자 경험을
                            연출할 수 있었습니다. 또한 Lottie 애니메이션을 활용한 제품 기능
                            시뮬레이션에서는 스크롤에 맞춰 텍스트와 모션이 동기화되도록 구성하여,
                            복잡한 기능 설명도 시각적 스토리텔링으로 자연스럽게 전달할 수
                            있었습니다.
                            <br />
                            <br /> 이번 프로젝트를 통해 퍼블리싱을 단순한 구현 업무를 넘어,&nbsp;
                            <b className="marker_yellow">
                                사용자 경험을 설계하고 전달하는 관점에서 구조적으로 바라보는 시야를
                                넓힐 수 있었고,
                            </b>
                            타 직군과의 유기적인 협업이 결과물의 완성도에 얼마나 깊은 영향을
                            미치는지를 실감하게 되었습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
