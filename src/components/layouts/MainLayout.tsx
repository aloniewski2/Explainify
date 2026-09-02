import { ContentWrapper } from "@/components/layouts/ContentWrapper";

export const MainLayout = () => {
  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.708_0_0_/_0.5)] overflow-auto inset-0">
      <ContentWrapper />
    </div>
  );
};
