

  export const footer = {
    title: "kedan jos",
    footer: "Made using kedan team",
    url: "",
    github: "",
  };

export default function Footer() {
    return (
      <div className="py-2 text-center " style={{backgroundColor: 'rgb(39 39 42)'}}>
        <a href={footer.url}>
          <div className="flex justify-center items-center gap-2 py-2">
            <div>{footer.footer}</div>
            <div>
            </div>
          </div>
        </a>
      </div>
    );
  }
  