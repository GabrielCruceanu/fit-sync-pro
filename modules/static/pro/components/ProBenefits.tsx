import {
  ActivitySquare,
  ClipboardList,
  ScanSearch,
  UsersRound,
} from "lucide-react";

export default function ProBenefits() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Why FitSyncPro?
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          With FitSyncPro, you can grow your business, connect with a vast
          network of fitness enthusiasts, and access powerful tools to
          streamline your operations.
        </p>
        <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
          <div>
            <ScanSearch className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Connect with fitness enthusiasts
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Grow your business by connecting with a vast network of fitness
              enthusiasts who are looking for your services.
            </p>
          </div>
          <div>
            <ClipboardList className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Streamlined operations
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Simplify your operations with our powerful tools that help you
              manage your clients, appointments.
            </p>
          </div>
          <div>
            <ActivitySquare className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Analiză inteligentă
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Accesați analize detaliate pentru a vă urmări creșterea, pentru a
              înțelege nevoile clienților și pentru a vă optimiza serviciile.
            </p>
          </div>
          <div>
            <UsersRound className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Rețea comunitară
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Alăturați-vă unei comunități de profesioniști care gândesc la fel,
              împărtășiți experiențe și creșteți împreună.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
