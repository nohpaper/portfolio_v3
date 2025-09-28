import { create } from "zustand";
export interface PortfolioList {
    name: string;
    isMulti: boolean;
    multiTitle?: string[]; //선택
    workType: "하드코딩" | "프론트";
    info: [
        {
            title: string; //필수
            link: string | null; //필수
            date?: string; //선택(isMulti: true 일 경우로 인해)
            type?: "적응형" | "반응형" | "모바일"; //선택(isMulti: true 일 경우로 인해)
            contribution?: number;
            workforce?: number;
            tool?: string[][];
        },
    ];
}
interface PortfolioStore {
    list: PortfolioList[];
}
export const usePortfolioStore = create<PortfolioStore>(() => ({
    list: [
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
            name: "",
            isMulti: false,
            multiTitle: [""],
            workType: "하드코딩",
            info: [
                {
                    title: "",
                    link: "",
                    date: "",
                    type: "적응형",
                    contribution: 100,
                    workforce: 1,
                    tool: [["HTML5", "SCSS", "JavaScript"], ["GSAP", "ScrollTrigger"], ["Figma"]],
                },
            ],
        },
    ],
}));
