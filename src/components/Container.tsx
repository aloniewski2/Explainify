import { Header } from "@/sections/Header";
import { MainLayout } from "@/components/layouts/MainLayout";

export const Container = () => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
      <div className="box-border caret-transparent h-[952px] outline-[oklab(0.708_0_0_/_0.5)] translate-y-12">
        <Header />
        <MainLayout />
      </div>
    </div>
  );
};
