import { InfoNav } from "../assets/Fragment.tsx";
import { useParams } from "react-router-dom";
import { usePortfolioStore } from "../store/store.ts";

//slide 관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";

export default function EnergySolution() {
    const { name } = useParams<{ name: string }>();
    const portfolioList = usePortfolioStore((state) => state.list);

    return (
        <div className="w-[100%] bg-beige-100">
            <div className="w-[1120px] pb-[140px] mx-auto">
                <InfoNav name={name} list={portfolioList} index={0} isInitFixed={true} />
                {/*    본문     */}
                <div className="pt-[236px]">
                    <h5 className="text-[16px] leading-[1.3]">
                        이 프로젝트는 제가
                        <b className="marker_yellow">
                            핵심 인터랙션 페이지의 퍼블리싱을 담당한 첫 메인 참여 프로젝트
                        </b>
                        로, 기술적으로 중요한 파트를 맡아 실질적인 성장 경험을 얻을 수 있었습니다.
                        전체적인 PL은 팀 내 과장님께서 맡으셨고, 과장님과 또 다른 팀원 한 분이 PC
                        버전 퍼블리싱에 함께 참여하셨으며, 모바일 작업은 외부 인력을 통해
                        진행되었습니다. 작업 특성상 디자이너와 퍼블리셔 간의 긴밀한 협업이
                        필요했으며, 이에 따라 디자이너와의 커뮤니케이션은 제가 전담하여
                        진행하였습니다. <br />
                        초기에 작업하던 디자이너가 퇴사한 후, 인터랙션 경험이 전무한 새로운
                        디자이너와 협업하게 되면서 구현 의도를 이해시키고 조율하는 과정을 거쳤고, 이
                        경험을 통해
                        <b className="marker_yellow">
                            협업 커뮤니케이션 능력과 인터랙션 중심 퍼블리싱에 대한 실무 감각
                        </b>
                        을 키울 수 있었습니다.
                    </h5>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            텍스트에 그라데이션이 차오르는 애니메이션
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
                                        poster="../../src/assets/energy_solution/1-1.jpg"
                                    >
                                        <source
                                            src="../../src/assets/energy_solution/1-1.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../src/assets/energy_solution/1-2.jpg"
                                        alt=""
                                        className="w-[70%] block mx-auto"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/energy_solution/1-3.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            특정 스크롤 진입 시 텍스트가 단색에서 부드러운 그라데이션으로 자연스럽게
                            전환되는 애니메이션을 구현했습니다. 이 효과를 위해 텍스트 요소는 총 세
                            겹(배경색, 초기값 텍스트, 그라데이션 텍스트)으로 구성했습니다. <br />
                            텍스트 외곽선에서 초기값 색상이 남는 이슈를 방지하기 위해 배경색을
                            활용했고, 그라데이션은 background-image와 background-clip: text를
                            활용하여 마스킹한 뒤,
                            <b className="marker_yellow">
                                GSAP과 ScrollTrigger를 통해 background-position을 조정
                            </b>
                            해 애니메이션 효과를 구현했습니다. 시각적으로 부드럽고 자연스럽게 색이
                            차오르는 느낌을 구현하는 데 집중했습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            스크롤에 따라 밤과 낮이 전환되는 시각 효과
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
                                        poster="../../src/assets/energy_solution/2-1.jpg"
                                    >
                                        <source
                                            src="../../src/assets/energy_solution/2-1.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/energy_solution/2-2.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/energy_solution/2-3.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            페이지 내 특정 섹션에서는 스크롤 위치에 따라 배경이 밤에서 낮 또는
                            낮에서 밤으로 전환되는 인터랙션을 구현했습니다.
                            <b className="marker_yellow">
                                전환 구간 내 오브젝트들은 SVG로 변환하여 CSS 속성으로 색상 및
                                분위기를 조정
                            </b>
                            했고, ScrollTrigger로 특정 위치에서 자연스럽게 배경이 전환되도록
                            설정했습니다. <br />
                            디자인 파일의 SVG 분리를 위해 디자이너와 소통하며 함께 수정 작업을
                            진행했습니다. 정확한 구현을 위해 디자이너와 기술 과정을 공유하며 설득한
                            경험이 인상 깊었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            페이지 전환 자연스러움 극대화를 위한 애니메이션 적용
                        </h4>
                        <div className="pt-[6px]">
                            <video
                                controls
                                muted
                                autoPlay
                                preload="none"
                                loop
                                poster="../../src/assets/energy_solution/3.jpg"
                            >
                                <source
                                    src="../../src/assets/energy_solution/3.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            초기 기획 단계에서 회사 내 모션팀과 논의하여 퍼블리싱만으로 구현이
                            어려운 구간을 애니메이션으로 대체하기로 결정하고, 해당 구간의 json
                            파일을 전달받아 페이지에 적용했습니다.
                            <br />
                            애니메이션 속도 및 동작 타이밍이 자연스럽게 연출되었는지 직접 확인 후
                            조율하였고, 이미지 → json 애니메이션 → 이미지로 이어지는 전환이 이질감
                            없이 흐르도록
                            <b className="marker_yellow">
                                페이드 인/아웃 타이밍과 동작 간격을 조정하여 사용자 경험을 매끄럽게
                                유지하는 데 집중
                            </b>
                            했습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            제품이 3D처럼 보이도록 연출한 애니메이션 구현
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
                                        poster="../../src/assets/energy_solution/4-1.jpg"
                                    >
                                        <source
                                            src="../../src/assets/energy_solution/4-1.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/energy_solution/4-2.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../src/assets/energy_solution/4-3.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            스크롤 위치에 따라 제품이 입체적으로 회전하는 것처럼 보이도록
                            ScrollTrigger와 이미지 시퀀스를 조합하여 3D 애니메이션을 구현했습니다.
                            이미지를 프레임 단위로 분할하고, 특정 위치에서 첫 프레임을 노출한 뒤
                            ScrollTrigger를 통해 background-position-x를 조정하여 이미지가 스크롤에
                            맞춰 전환되도록 처리했습니다.
                            <br />이 방식은 작업 당시 프로젝트 일정과 퀄리티 밸런스를 고려했을 때
                            가장 현실적인 최선의 선택이었으며,
                            <b className="marker_yellow">
                                스크롤에 따라 제품을 직접 조작하는 듯한 몰입감을 줄 수 있도록 연출
                            </b>
                            하는 데 중점을 두었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            협업 과정에서의 커뮤니케이션 경험
                        </h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            초기 디자이너가 디자인 작업을 마친 뒤 퇴사하고, 인터랙션 작업 경험이
                            적은 디자이너분과 협업하게 되었습니다. 클라이언트 요구나 퍼블리싱 중
                            발생하는 UI 조정 등에 대한 이해가 부족하셨기에, 작업 중간중간 기능 구현
                            방식과 제약사항 등을 직접 설명드리고,
                            <b className="marker_yellow">
                                시각 자료나 임시 구현물을 공유하여 서로의 이해도를 맞춰가며 작업
                            </b>
                            했습니다. <br />
                            이는 개발과 디자인 간의 원활한 소통의 중요성을 다시금 체감하게 한
                            경험이었고, 실무 커뮤니케이션 스킬을 키울 수 있었던 계기가 되었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            리더십 변화에 대응한 유연한 퍼블리싱
                        </h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            이 프로젝트는 이전에 함께 했던
                            <b className="marker_yellow">
                                PL과는 다른 리드 분과 함께 하면서, PL의 스타일에 따라 퍼블리셔의
                                작업 방향과 의사결정 구조가 크게 달라질 수 있다는 점을 체감하게 된
                                경험
                            </b>
                            이었습니다. <br />
                            또한 ScrollTrigger 기반 인터랙션, 제품 3D 애니메이션 등 기술적인 도전이
                            많았고, 디자이너와 기능 가능성을 함께 조율하는 일이 많아 전체적인
                            인터랙션 흐름을 설계하고 팀과 조율하는 역량을 쌓을 수 있었습니다.
                            기술적으로도, 협업적으로도 스스로 한 단계 성장했다고 느낀
                            프로젝트입니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
