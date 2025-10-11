import { create } from "zustand";
export interface PortfolioInfo {
    title: string; //필수
    link: string | null; //필수
    date?: string; //선택(isMulti: true 일 경우로 인해)
    type?: "적응형" | "반응형" | "모바일"; //선택(isMulti: true 일 경우로 인해)
    contribution?: number;
    workforce?: number;
    tool?: string[][];
}
export interface PortfolioList {
    name: string;
    isMulti: boolean;
    multiTitle?: string[]; //선택
    workType: "하드코딩" | "프론트";
    info: PortfolioInfo[];
}
interface PortfolioStore {
    list: PortfolioList[];
}
export const usePortfolioStore = create<PortfolioStore>(() => ({
    list: [
        {
            name: "",
            isMulti: false,
            multiTitle: [],
            workType: "프론트",
            info: [
                {
                    title: "포켓몬스터 도감",
                    link: "",
                    date: "2025. 09. 15 ~ 09. 22(8일)",
                    type: "반응형",
                    contribution: 100,
                    workforce: 1,
                    tool: [["REACT"], ["Tailwind"], ["Prettier", "ESLint"]],
                },
            ],
        },
        {
            name: "recordbook",
            isMulti: false,
            multiTitle: [],
            workType: "프론트",
            info: [
                {
                    title: "모아보자 가계부",
                    link: "https://nohpaper.github.io/record-book-v2/",
                    date: "2025. 06. 26 ~ 08. 08(20일)",
                    type: "반응형",
                    contribution: 100,
                    workforce: 1,
                    tool: [["REACT"], ["Tailwind", "Zustand"], ["Prettier", "ESLint"], ["Figma"]],
                },
            ],
        },
        {
            name: "mabinogi",
            isMulti: true,
            multiTitle: ["", "ver.1", "ver.2"],
            workType: "프론트",
            info: [
                {
                    title: "마비노기 시뮬레이터 ver.1~2",
                    link: null,
                    type: "반응형",
                    contribution: 100,
                    workforce: 1,
                },
                {
                    title: "마비노기 시뮬레이터 ver.1",
                    link: "https://nohpaper.github.io/mabinogi_combocard_simulation/",
                    date: "2024. 02. 05 ~ 03. 18(21일)",
                    tool: [["REACT"], ["SCSS"]],
                },
                {
                    title: "마비노기 시뮬레이터 ver.2",
                    link: "https://nohpaper.github.io/mabinogi_combocard_simulation_v2/",
                    date: "2024. 10. 08 ~ 11. 11(25일)",
                    tool: [["REACT"], ["Tailwind", "Redux"]],
                },
            ],
        },
        {
            name: "shopchain",
            isMulti: false,
            multiTitle: [],
            workType: "하드코딩",
            info: [
                {
                    title: "샵체인 사이트 리뉴얼",
                    link: "https://somunnanshop.com/index.php/home/main",
                    date: "2025. 02. 05 ~ 03. 14(28일)",
                    type: "적응형",
                    contribution: 100,
                    workforce: 1,
                    tool: [["HTML5", "SCSS", "JavaScript"], ["GSAP", "ScrollTrigger"], ["Figma"]],
                },
            ],
        },
        {
            name: "energy_solution",
            isMulti: false,
            multiTitle: [],
            workType: "하드코딩",
            info: [
                {
                    title: "에너지 솔루션 사이트 리뉴얼",
                    link: "https://www.lgessbattery.com/en/lgenblock/index.html",
                    date: "2023. 05. 15 ~ 06. 09(20일)",
                    type: "반응형",
                    contribution: 40,
                    workforce: 4,
                    tool: [["HTML5", "SCSS", "JQuery"], ["GSAP", "ScrollTrigger"], ["Figma"]],
                },
            ],
        },
        {
            name: "receipt",
            isMulti: false,
            multiTitle: [],
            workType: "하드코딩",
            info: [
                {
                    title: "특별한 영수증 캠페인 랜딩페이지 제작",
                    link: "https://campaign.concern.or.kr/specialreceipt/",
                    date: "2022. 12. 02 ~ 12. 14(9일)",
                    type: "적응형",
                    contribution: 100,
                    workforce: 1,
                    tool: [["HTML5", "SCSS", "JQuery"], ["GSAP", "ScrollTrigger"], ["Photoshop"]],
                },
            ],
        },
        {
            name: "golf",
            isMulti: false,
            multiTitle: [],
            workType: "하드코딩",
            info: [
                {
                    title: "골프 플랫폼 하이브리드 앱 제작",
                    link: null,
                    date: "2022. 07. 27 ~ 08. 26(23일)",
                    type: "모바일",
                    contribution: 40,
                    workforce: 2,
                    tool: [["HTML5", "SCSS", "JQuery"], ["Figma"]],
                },
            ],
        },
    ],
}));
