import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  alt?: string;
  link?: string;
  confidential?: boolean;
}

const WorkImage = (props: Props) => {
  const confidentialDialog = useRef<HTMLDialogElement>(null);
  const isExternalLink = Boolean(props.link && !props.link.startsWith("/"));

  return (
    <div className="work-image">
      {props.link ? (
        isExternalLink ? (
          <a
            className="work-image-in"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor={"disable"}
          >
            <div className="work-link">
              <MdArrowOutward />
            </div>
            <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
          </a>
        ) : (
          <Link
            className="work-image-in"
            to={props.link}
            data-cursor={"disable"}
          >
            <div className="work-link">
              <MdArrowOutward />
            </div>
            <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
          </Link>
        )
      ) : props.confidential ? (
        <>
          <button type="button" className="work-image-in" onClick={() => confidentialDialog.current?.showModal()}>
            <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
          </button>
          <dialog ref={confidentialDialog} className="confidential-dialog" aria-label="Client-sensitive project">
            <h3>Client-sensitive project</h3>
            <p>{props.alt} is client-confidential.</p>
            <form method="dialog"><button>Close</button></form>
          </dialog>
        </>
      ) : (
        <div
          className="work-image-in"
          data-cursor={"disable"}
        >
          <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
        </div>
      )}
    </div>
  );
};

export default WorkImage;
