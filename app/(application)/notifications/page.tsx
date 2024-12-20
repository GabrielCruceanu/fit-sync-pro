import React from "react";
import { Metadata } from "next";
import { LayoutTitle } from "@/modules/application/layout/components/LayoutTitle";
import { ApplicationLinks } from "@/constants/links";
export const metadata: Metadata = {
  title: "Notifications",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionist, and gyms with clients.",
};
export default function NotificationsPage() {
  return (
    <>
      <LayoutTitle title={ApplicationLinks.notifications.name} />
      <div className="overflow-hidden my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-background">
        <div>
          <a
            href="#"
            className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
          >
            <div className="flex-shrink-0">
              <img
                className="w-11 h-11 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Green avatar"
              />
              <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
              </div>
            </div>
            <div className="pl-3 w-full">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                New message from
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                : "Hey, what's up? All set for the presentation?"
              </div>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                a few moments ago
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
          >
            <div className="flex-shrink-0">
              <img
                className="w-11 h-11 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
              </div>
            </div>
            <div className="pl-3 w-full">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Jese leos
                </span>
                and
                <span className="font-medium text-gray-900 dark:text-white">
                  5 others
                </span>
                started following you.
              </div>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                10 minutes ago
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
          >
            <div className="flex-shrink-0">
              <img
                className="w-11 h-11 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="Joseph McFall avatar"
              />
              <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="pl-3 w-full">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Joseph Mcfall
                </span>
                and
                <span className="font-medium text-gray-900 dark:text-white">
                  141 others
                </span>
                love your story. See it and view more stories.
              </div>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                44 minutes ago
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
          >
            <div className="flex-shrink-0">
              <img
                className="w-11 h-11 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="Roberta Casas image"
              />
              <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="pl-3 w-full">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Leslie Livingston
                </span>
                mentioned you in a comment:
                <span className="font-medium text-primary-600 dark:text-primary-500">
                  @bonnie.green
                </span>
                what do you say?
              </div>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                1 hour ago
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <div className="flex-shrink-0">
              <img
                className="w-11 h-11 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                alt="Robert image"
              />
              <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
              </div>
            </div>
            <div className="pl-3 w-full">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Robert Brown
                </span>
                posted a new video: Glassmorphism - learn how to implement the
                new design trend.
              </div>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                3 hours ago
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
