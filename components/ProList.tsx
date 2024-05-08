// import clsx from "clsx";
// import ProItem from "@/components/ProItem";
// import { Nutritionist, Trainer, Gym } from "@/ts/types";
// import { UserType } from "@/ts/enum";

// export default function ProList({
//   proList,
//   isHome,
// }: {
//   proList: Trainer[] | Nutritionist[] | Gym[];
//   isHome: boolean;
// }) {
//   return (
//     <ul className="mt-5 md:flex md:flex-wrap">
//       {proList.map((proCard, key: number) => {
//         const {
//           username,
//           type,

//           profile_picture_url,
//           certificate,
//           city,
//           type,
//           gym_name,
//           first_name,
//           last_name,
//         } = proCard;
//         const name =
//           type === UserType.GYM && gym_name
//             ? gym_name
//             : first_name + " " + last_name;
//         const link =
//           type === UserType.GYM
//             ? "sali-de-antrenament"
//             : type === UserType.TRAINER
//               ? "antrenori"
//               : "nutritionisti";
//         return (
//           <li
//             className={clsx("mt-4 md:w-1/2 md:pr-3", {
//               " lg:w-4/12": !isHome,
//             })}
//             key={key}
//           >
//             <ProItem
//               link={link + "/" + username!}
//               key={key}
//               name={name}
//               type={type!}
//               proType={pro_type!}
//               city={city}
//               photoSrc={profile_picture_url!}
//               certificate={!!certificate}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
