import { AlergiiAlimentare, FoodPreferences } from "@/ts/types";

export const FoodAllergies: AlergiiAlimentare[] = [
  {
    id: 1,
    tip_alergie: "Cereale care contin gluten",
    exemplu_alimente_asociate:
      "paine, produse de brutarie, amestecuri de copt, paste, pesmet, biscuiti, produse care contin carne, sosuri, supe, bauturi care contin cacao, amestecuri musli",
    alimente_sigure:
      "faina de orez, hrisca, faina de porumb, faina de tapioca, faina de nuci",
  },
  {
    id: 2,
    tip_alergie: "Crustacee",
    exemplu_alimente_asociate: "creveti, creveti mari, crabi, raci, homari",
    alimente_sigure: "peste afumat",
  },
  {
    id: 3,
    tip_alergie: "Ouă",
    exemplu_alimente_asociate:
      "torturi, dulciuri/produse de cofetarie, deserturi cu creme, sosuri, paste, quiche, maioneza, produse cu carne",
    alimente_sigure:
      "piure de banana, mix de gelatina cu apa calduta, sos de mere",
  },
  {
    id: 4,
    tip_alergie: "Peste",
    exemplu_alimente_asociate:
      "preparate etnice, dressinguri de salata si sosuri, cum ar fi sosul de soia, sosul de peste, sosul Worcestershire",
    alimente_sigure: "maioneza ca baza pentru dressing",
  },
  {
    id: 5,
    tip_alergie: "Arahide",
    exemplu_alimente_asociate:
      "sosuri, torturi, deserturi, ulei de arahide, faina de arahide, unt de arahide",
    alimente_sigure: "uleiuri de seminte",
  },
  {
    id: 6,
    tip_alergie: "Soia",
    exemplu_alimente_asociate:
      "tofu, faina de soia sau proteina de soia (concentrata sau izolata)",
    alimente_sigure: "Cartofi, orez, canepa, migdale, nuca de cocos",
  },
  {
    id: 7,
    tip_alergie: "Lapte și produse derivate (inclusiv lactoza)",
    exemplu_alimente_asociate:
      "iaurt, smantana, branza, unt, deserturi care contin lapte, produse instant, aditivi continand lactoza",
    alimente_sigure:
      "lapte, iaurt sau branza de soia, lapte produs din orez, ovaz, quinoa, migdale, alune, nuca de cocos sau cartofi",
  },
  {
    id: 8,
    tip_alergie: "Fructe cu coajă",
    exemplu_alimente_asociate:
      "Migdale, nuci, alune pecan, alune de padure (hazelnuts), nuci de Brazilia, caju, fistic si nuci de macadamia",
    alimente_sigure: "Nucsoara, Castane de apa, Dovleac, Nuca de cocos",
  },
  {
    id: 9,
    tip_alergie: "Muștar și produse derivate",
    exemplu_alimente_asociate: "-",
    alimente_sigure: "-",
  },
  {
    id: 10,
    tip_alergie: "Seminţe de susan și produse derivate",
    exemplu_alimente_asociate: "-",
    alimente_sigure: "-",
  },
  {
    id: 11,
    tip_alergie: "Dioxid de sulf și sulfiţi",
    exemplu_alimente_asociate: "-",
    alimente_sigure: "-",
  },
  {
    id: 12,
    tip_alergie: "Lupin și produse derivate",
    exemplu_alimente_asociate: "-",
    alimente_sigure: "-",
  },
  {
    id: 13,
    tip_alergie: "Moluște și produse derivate",
    exemplu_alimente_asociate:
      "scoici, sepie, caracatita, calamar, midii, stridii",
    alimente_sigure: "-",
  },
  {
    id: 14,
    tip_alergie: "Telina și produse derivate",
    exemplu_alimente_asociate: "-",
    alimente_sigure: "-",
  },
];

export const foodPreferences: FoodPreferences[] = [
  "Omnivor",
  "Vegetarian",
  "Vegan",
  "Keto",
];
