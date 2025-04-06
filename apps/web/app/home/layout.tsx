type props ={
  children: React.ReactNode;
}

export default function HomeLayout({
    children,
  }: props) {
    return (
      <>
        {children}
      </>
    );
  }