import { InfoNav } from "../assets/Fragment.tsx";
import { useParams } from "react-router-dom";
import { usePortfolioStore } from "../store/store.ts";

//이미지 관련
import image1_1 from "../../src/assets/pokemon/1-1.jpg";
import image1_2 from "../../src/assets/pokemon/1-2.jpg";
import image1_3 from "../../src/assets/pokemon/1-3.jpg";
import image2_1 from "../../src/assets/pokemon/2-1.jpg";
import image2_2 from "../../src/assets/pokemon/2-2.jpg";
import image2_3 from "../../src/assets/pokemon/2-3.jpg";

//slide 관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";

export default function Pokemon() {
    const { name } = useParams<{ name: string }>();
    const portfolioList = usePortfolioStore((state) => state.list);

    return (
        <div className="w-[100%] bg-beige-100">
            <div className="w-[1120px] pb-[140px] mx-auto">
                <InfoNav name={name} list={portfolioList} index={0} isInitFixed={true} />
                {/*    본문     */}
                <div className="pt-[236px]">
                    <h5 className="text-[16px] leading-[1.3]">
                        외부 API를 활용한 프로젝트를 기획하며, 친숙한 주제로 접근하고자 웹 기반
                        포켓몬스터 게임을 떠올렸고, 관련된 PokéAPI를 발견하여 이를 활용한 작업을
                        진행하게 되었습니다. 이번 프로젝트는 외부 API 통신에 대한 이해도를 높이고
                        이를 프론트엔드 개발 과정에서 자연스럽고 능숙하게 적용하는 것을 목표로
                        하였습니다.
                        <br />
                        API를 활용해 게임 형태로 구현하는 것도 고려했으나, 복잡한 로직보다는&nbsp;
                        <b className="marker_yellow">
                            API 데이터를 효과적으로 불러오고 시각화하는 데 집중하기 위해 도감(사전)
                            형태로 구성
                        </b>
                        하였습니다. 특히 비동기 처리, 컴포넌트 간 데이터 전달, UI 상태 관리 등 실제
                        서비스 개발에서 자주 마주치는 기술 요소들을 경험하고자 하였습니다.
                        <br />
                        또한, API 사용 시 제공하지 않는 기능을 임의로 구현하거나 서버에 과도한
                        요청을 보내는 것은 API 제공자의 정책에 어긋날 수 있기 때문에, 검색 등 일부
                        고급 기능은 구현 범위에서 제외하고, 제공되는 데이터 내에서 사용자 경험을
                        고려한 레이아웃 구성과 시각적 표현에 중점을 두었습니다.
                    </h5>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            직접 구현을 통한 네트워크 로직의 이해와 확장성
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
                                    <img src={image1_1} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image1_2} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image1_3} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            무거운 라이브러리를 사용하지 않고도 필요한 기능을 구현할 수 있다고
                            판단해, 이번 프로젝트에서는 axios 대신 브라우저의 내장 API인 fetch와
                            async/await 조합을 사용했습니다. 결과적으로 네트워크 요청에 필요한
                            기능은 모두 충족하면서도, 더 가볍고 단순한 코드 구조를 유지할 수
                            있었습니다.
                            <br />
                            도감 페이지는 여러 외부 API를 연속적으로 호출하고, 각각의 응답을
                            조합하여 화면에 보여주는 흐름으로 구성되어 있습니다. 이런 구조에서는
                            async/await 방식이 흐름 제어에 직관적이며, 요청 간의 순서를 명확하게
                            구성할 수 있는 이점이 있습니다.
                            <br />
                            또한 fetch는 기본적인 구조가 단순하고, React의 useEffect나 try-catch와
                            결합하여 사용하기 용이해 커스터마이징과 디버깅이 쉬웠습니다. 직접
                            네트워크 로직을 다루는 과정을 통해&nbsp;
                            <b className="marker_yellow">
                                데이터 흐름에 대한 이해도 높아졌고, 이는 추후 라이브러리 사용 시에도
                                보다 능동적으로 활용할 수 있는 기반
                            </b>
                            이 되었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">
                            도감형 UI에 최적화된 무한 스크롤 구현
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
                                    <img src={image2_1} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image2_2} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image2_3} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            작업물이 포켓몬 도감 형태인 만큼, 사용자 경험을 고려해 콘텐츠 탐색
                            방식에 대해 고민했습니다. 페이지를 숫자 버튼으로 구분해 이동하는 오프셋
                            기반 페이징보다는, 사용자가 화면을 아래로 스크롤할수록 콘텐츠가
                            자연스럽게 이어지는 무한 스크롤 방식이 도감 형태에 더 어울린다고
                            판단했습니다.
                            <br />
                            무한 스크롤을 구현하는 방법은 여러 가지가 있지만, 이번 프로젝트에서는
                            브라우저의 네이티브 API인 Intersection Observer를 사용했습니다. 이
                            방식은 요소가 화면에 얼마나 노출됐는지를 감지해 자동으로 데이터를 불러올
                            수 있어, scroll 이벤트를 직접 감지하는 방식보다 성능 부담이 적고 구현도
                            훨씬 단순합니다. 또한, 라이브러리보다 원하는 동작을 더 세밀하게 제어할
                            수 있었고, React의 useRef나 useEffect와도 자연스럽게 연동되어 직접
                            구현하는 쪽이 더 유리하다고 판단했습니다.
                            <br />
                            라이브러리가 아닌&nbsp;
                            <b className="marker_yellow">
                                기본으로 내장되어 있는 것들을 커스터마이징을 할 수 있어야 라이브러리
                                또한 능숙하게 사용할 수 있다고 생각
                            </b>
                            하고 그렇기에 Intersection Observer를 활용하여 무한 스크롤을
                            구현했습니다. 중복 호출 방지를 위한 ref 플래그 처리, 데이터 로딩 제한
                            조건 설정, 옵저버 등록 및 해제를 통한 자원 관리까지 고려하여 사용자
                            경험과 성능 모두를 잡는 방향으로 개발했습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">어려웠던 점과 해결 방법</h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            처음 외부 API를 활용하는 프로젝트였기 때문에, API를 어디까지 어떻게
                            활용할 수 있는지에 대한 범위 설정이 가장 큰 고민이었습니다. 단순히
                            데이터를 가져오는 것을 넘어서 사용자와의 상호작용이 자연스럽게
                            이루어지도록 하기 위해 검색창 등 다양한 기능을 생각했지만,&nbsp;
                            <b className="marker_yellow">
                                제공하지 않는 기능을 임의로 구현하거나 지나치게 많은 요청을 보내는
                                것은 API 정책 위반이 될 수 있다는 점을 인지
                            </b>
                            하게 되었습니다. 이로 인해 실제 서비스에서는 사용자에게 편리한
                            기능이더라도, 외부 API의 사용 정책을 고려하여 구현 범위를 제한해야
                            한다는 사실을 알게 되었습니다. 검색 기능 등의 기능들은 과도한 요청이
                            발생할 수 있어 이번 프로젝트에서는 제외하고, 제공되는 데이터 내에서
                            사용자 경험을 최대한 끌어올리는 방향으로 설계하게 되었습니다.
                            <br />
                            이번 작업을 통하여 외부 API를 사용할 때는 단순히 기술적인 접근을 넘어서,
                            API 제공자와의 암묵적인 '예의'와 책임 있는 사용 태도가 필요하다는 점도
                            알게 되었습니다. 문서를 꼼꼼히 읽고, 요청을 최적화하며, 서버에 부담을
                            주지 않도록 구현을 조정하는 등의 과정은 단순한 기능 개발을 넘어선 중요한
                            개발자의 자세라는 것을 알게 되었습니다. 이런 고민들을 통해 단지&nbsp;
                            <b className="marker_yellow">
                                외부 API를 ‘가져다 쓰는’ 것이 아니라, ‘책임감 있게 다루는’ 것이
                                진정한 활용
                            </b>
                            이라는 점을 깊이 느낄 수 있는 계기가 되었습니다.
                        </p>
                    </div>
                    <div className="pt-[80px]">
                        <h4 className="text-[20px] leading-[1.3]">느낀 점 및 앞으로의 방향</h4>
                        <p className="pt-[6px] text-[16px] leading-[1.3]">
                            이번 프로젝트는 기본적인 네트워크 통신부터 비동기 처리, 사용자 경험
                            설계까지 폭넓게 경험할 수 있었던 좋은 경험이었습니다. 특히 fetch와
                            async/await, 그리고 Intersection Observer 같은 브라우저 내장 기능을
                            적극적으로 활용하면서, 무거운 라이브러리에 의존하지 않고도 기능 구현을
                            하여 자신감을 얻게 되었습니다.
                            <br />
                            단순한 API 호출을 넘어서, 데이터를 어떻게 불러오고, 사용자에게 어떻게
                            보여줄지에 대한 흐름을 설계하면서 프론트엔드 개발에서 데이터와 UI 사이의
                            연결 구조에 대해 깊이 있게 이해하게 되었습니다. 그동안 기획부터 개발까지
                            혼자 작업하는 경우가 많았는데 이번 작업으로 하여금 데이터를 어떻게 짜면
                            좀 더 수월하게 작업이 가능한지 어떤 식으로 개발 코스트를 줄이는지에
                            대해서도 많은 경험이 되었다고 생각합니다. 또한, React의 useEffect,
                            useRef와 같은 훅과&nbsp;
                            <b className="marker_yellow">
                                결합한 상태 관리 경험은 앞으로 더 복잡한 구조를 다룰 때에도 큰
                                도움이 될 것으로 생각
                            </b>
                            합니다.
                            <br />
                            앞으로는 이런 기초적인 경험을 바탕으로, 보다 복잡한 외부 API 연동이나
                            실제 서비스 수준의 사용자 경험 구현에도 도전해 보고 싶습니다. 단순히
                            작동하는 것에서 끝나는 것이 아니라, 사용성과 신뢰성을 모두 고려하는
                            방향으로 개발 역량을 키워나가고자 합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
