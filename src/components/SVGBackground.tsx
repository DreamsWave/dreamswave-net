import { PIXEL_SIZE } from "../constants";

type SVGProps = {
  color?: string;
  className?: string;
  height?: number;
  width?: number;
};

export const CloudBackSVG = ({
  color = "#d9eaed",
  className,
  height = 180,
  width = 320,
}: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height ? height : PIXEL_SIZE * 180}
      width={width ? width : PIXEL_SIZE * 320}
      baseProfile="tiny"
      version="1.2"
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill={color}>
        <path d="M67 106h3v74h-3z" />
        <path d="M65 107h8v73h-8z" />
        <path d="M64 108h11v72H64zM43 109h4v71h-4z" />
        <path d="M63 109h18v71H63zM41 110h8v70h-8z" />
        <path d="M62 110h21v70H62zM85 110h6v70h-6zM33 111h17v69H33z" />
        <path d="M83 111h10v69H83zM31 112h20v68H31z" />
        <path d="M61 112h34v68H61zM30 113h22v67H30zM95 113h2v67h-2zM180 113h10v67h-10z" />
        <path d="M29 114h24v66H29zM97 114h1v66h-1zM114 114h3v66h-3zM130 114h8v66h-8zM179 114h13v66h-13zM53 115h4v65h-4z" />
        <path d="M58 115h41v65H58zM111 115h12v65h-12zM126 115h14v65h-14zM175 115h25v65h-25zM16 116h3v64h-3zM23 116h3v64h-3z" />
        <path d="M28 116h72v64H28zM103 116h4v64h-4zM110 116h31v64h-31zM171 116h31v64h-31zM219 116h7v64h-7zM229 116h3v64h-3zM317 116h3v64h-3z" />
        <path d="M14 117h128v63H14zM169 117h34v63h-34zM217 117h17v63h-17zM248 117h15v63h-15zM270 117h4v63h-4zM315 117h5v63h-5z" />
        <path d="M13 118h130v62H13zM167 118h37v62h-37zM216 118h20v62h-20zM246 118h30v62h-30zM313 118h7v62h-7z" />
        <path d="M12 119h131v61H12zM166 119h39v61h-39zM215 119h22v61h-22zM245 119h32v61h-32zM311 119h9v61h-9z" />
        <path d="M11 120h133v60H11zM161 120h45v60h-45zM214 120h24v60h-24zM244 120h34v60h-34zM292 120h8v60h-8zM310 120h10v60h-10z" />
        <path d="M159 121h48v59h-48zM238 121h2v59h-2zM243 121h36v59h-36zM284 121h3v59h-3zM288 121h14v59h-14zM308 121h12v59h-12zM5 122h3v58H5zM10 122h134v58H10z" />
        <path d="M158 122h50v58h-50zM213 122h66v58h-66zM281 122h23v58h-23zM307 122h13v58h-13zM2 123h143v57H2zM147 123h6v57h-6z" />
        <path d="M157 123h52v57h-52zM210 123h95v57h-95zM306 123h14v57h-14z" />
        <path d="M0 124h320v26H0zM145 150h175v30H145z" />
        <path d="M1 151h319v29H1z" />
        <path d="M0 152h320v28H0z" />
      </g>
    </svg>
  );
};

export const CloudLeftSVG = ({
  color = "#c7e0e5",
  className,
  height = 180,
  width = 320,
}: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height ? height : PIXEL_SIZE * 180}
      width={width ? width : PIXEL_SIZE * 320}
      baseProfile="tiny"
      version="1.2"
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill={color}>
        <path d="M4 130h6v50H4z" />
        <path d="M2 131h10v49H2z" />
        <path d="M0 132h13v48H0zM13 133h1v47h-1zM14 134h1v46h-1zM32 135h8v45h-8zM43 135h6v45h-6zM15 136h1v44h-1z" />
        <path d="M30 136h21v44H30zM16 137h10v43H16z" />
        <path d="M28 137h25v43H28z" />
        <path d="M26 138h28v42H26zM54 140h1v40h-1zM58 140h10v40H58z" />
        <path d="M56 141h14v39H56z" />
        <path d="M55 142h16v38H55zM85 142h7v38h-7zM71 143h1v37h-1z" />
        <path d="M83 143h11v37H83zM72 144h1v36h-1z" />
        <path d="M81 144h15v36H81z" />
        <path d="M80 145h26v35H80zM73 146h1v34h-1zM106 146h2v34h-2zM74 147h2v33h-2z" />
        <path d="M79 147h30v33H79z" />
        <path d="M76 148h35v32H76zM111 149h1v31h-1zM112 150h1v30h-1zM113 152h1v28h-1zM114 154h1v26h-1zM118 154h4v26h-4z" />
        <path d="M116 155h8v25h-8z" />
        <path d="M115 156h11v24h-11zM137 156h7v24h-7zM126 157h1v23h-1z" />
        <path d="M135 157h11v23h-11z" />
        <path d="M133 158h14v22h-14zM127 159h1v21h-1z" />
        <path d="M132 159h16v21h-16z" />
        <path d="M130 160h18v20h-18z" />
        <path d="M128 161h21v19h-21zM149 162h1v18h-1zM150 163h1v17h-1zM151 165h2v15h-2zM153 166h2v14h-2zM155 167h2v13h-2zM157 168h1v12h-1zM158 169h1v11h-1zM159 171h1v9h-1zM160 172h1v8h-1zM161 173h1v7h-1zM162 174h1v6h-1zM163 176h1v4h-1zM164 178h3v2h-3zM167 179h2v1h-2z" />
      </g>
    </svg>
  );
};

export const CloudMiddleSVG = ({
  color = "#d2e6e9",
  className,
  height = 180,
  width = 320,
}: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height ? height : PIXEL_SIZE * 180}
      width={width ? width : PIXEL_SIZE * 320}
      baseProfile="tiny"
      version="1.2"
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill={color}>
        <path d="M158 130h4v50h-4z" />
        <path d="M156 131h8v49h-8z" />
        <path d="M154 132h11v48h-11z" />
        <path d="M152 133h19v47h-19zM119 134h5v46h-5zM125 134h10v46h-10z" />
        <path d="M151 134h21v46h-21zM117 135h20v45h-20z" />
        <path d="M150 135h23v45h-23zM116 136h22v44h-22z" />
        <path d="M146 136h28v44h-28zM102 137h7v43h-7zM110 137h29v43h-29z" />
        <path d="M144 137h30v43h-30z" />
        <path d="M101 138h73v42h-73zM177 138h4v42h-4z" />
        <path d="M100 139h83v41h-83z" />
        <path d="M99 140h89v40H99zM188 141h3v39h-3zM202 141h8v39h-8zM191 142h2v38h-2z" />
        <path d="M197 142h15v38h-15zM93 143h4v37h-4z" />
        <path d="M193 143h20v37h-20z" />
        <path d="M91 144h122v36H91z" />
        <path d="M90 145h125v35H90z" />
        <path d="M88 146h128v34H88z" />
        <path d="M87 147h131v33H87zM218 148h1v32h-1z" />
        <path d="M86 149h133v31H86z" />
        <path d="M85 150h135v30H85zM71 152h6v28h-6z" />
        <path d="M84 152h139v28H84zM69 153h9v27h-9zM223 153h2v27h-2z" />
        <path d="M68 154h159v26H68z" />
        <path d="M66 155h162v25H66zM229 155h10v25h-10z" />
        <path d="M65 156h175v24H65zM240 157h1v23h-1z" />
        <path d="M63 158h179v22H63z" />
        <path d="M62 159h180v21H62z" />
        <path d="M61 160h182v7H61zM243 161h1v19h-1z" />
        <path d="M60 162h186v3H60zM246 163h1v17h-1z" />
        <path d="M244 165h4v15h-4z" />
        <path d="M242 167h6v13h-6z" />
        <path d="M61 168h187v12H61z" />
        <path d="M60 169h188v11H60z" />
        <path d="M58 170h191v10H58z" />
        <path d="M54 171h197v9H54z" />
        <path d="M53 172h199v8H53z" />
        <path d="M52 173h209v7H52z" />
        <path d="M51 174h212v6H51zM263 175h1v5h-1zM264 176h1v4h-1zM265 177h1v3h-1z" />
      </g>
    </svg>
  );
};

export const CloudRightSVG = ({
  color = "#cbe3e6",
  className,
  height = 180,
  width = 320,
}: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height ? height : PIXEL_SIZE * 180}
      width={width ? width : PIXEL_SIZE * 320}
      baseProfile="tiny"
      version="1.2"
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill={color}>
        <path d="M248 126h6v54h-6z" />
        <path d="M245 127h13v53h-13zM265 127h6v53h-6z" />
        <path d="M238 128h23v52h-23zM263 128h9v52h-9zM275 128h4v52h-4z" />
        <path d="M237 129h45v51h-45zM283 129h3v51h-3zM301 129h3v51h-3z" />
        <path d="M236 130h53v50h-53zM298 130h8v50h-8z" />
        <path d="M235 131h56v49h-56zM297 131h10v49h-10z" />
        <path d="M234 132h60v48h-60zM296 132h12v48h-12z" />
        <path d="M231 133h84v47h-84z" />
        <path d="M228 134h88v46h-88z" />
        <path d="M226 135h91v45h-91z" />
        <path d="M225 136h93v12h-93z" />
        <path d="M224 137h96v10h-96z" />
        <path d="M223 138h97v8h-97z" />
        <path d="M222 140h98v4h-98zM318 147h2v33h-2zM222 148h3v32h-3z" />
        <path d="M317 148h3v32h-3z" />
        <path d="M219 149h101v31H219z" />
        <path d="M218 150h102v30H218z" />
        <path d="M217 151h103v29H217z" />
        <path d="M216 153h104v27H216z" />
        <path d="M215 156h105v24H215zM207 157h4v23h-4z" />
        <path d="M198 158h15v22h-15z" />
        <path d="M196 159h18v21h-18zM184 160h4v20h-4z" />
        <path d="M195 160h125v20H195zM182 161h8v19h-8z" />
        <path d="M194 161h126v19H194zM181 162h10v18h-10z" />
        <path d="M193 162h127v18H193z" />
        <path d="M180 163h140v17H180z" />
        <path d="M175 164h145v16H175z" />
        <path d="M174 165h146v15H174z" />
        <path d="M173 166h147v14H173z" />
        <path d="M172 167h148v13H172z" />
        <path d="M171 168h149v12H171z" />
        <path d="M169 170h151v10H169z" />
        <path d="M167 171h153v9H167z" />
        <path d="M166 172h154v8H166z" />
        <path d="M165 173h155v7H165z" />
        <path d="M164 174h156v6H164z" />
        <path d="M163 175h157v5H163z" />
        <path d="M162 176h158v4H162z" />
        <path d="M159 179h161v1H159z" />
      </g>
    </svg>
  );
};

export const BackgroundSVG = ({
  color = "#dfeded",
  className,
  height = 180,
  width = 320,
}: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height ? height : PIXEL_SIZE * 180}
      width={width ? width : PIXEL_SIZE * 320}
      baseProfile="tiny"
      version="1.2"
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <path fill={color} d="M0 0h320v180H0z" />
    </svg>
  );
};

export const StarsSVG = ({
  color = "#ffffff",
  className,
  height = 180,
  width = 320,
}: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height ? height : PIXEL_SIZE * 180}
      width={width ? width : PIXEL_SIZE * 320}
      baseProfile="tiny"
      version="1.2"
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill={color}>
        <path d="M11 6h1v1h-1zM126 11h1v1h-1zM56 14h1v1h-1zM172 14h1v1h-1zM291 17h1v1h-1zM226 24h1v1h-1zM316 27h1v1h-1zM259 28h1v1h-1zM5 35h1v1H5zM66 35h1v1h-1zM122 36h1v1h-1zM28 38h1v1h-1zM296 44h1v1h-1zM145 54h1v1h-1zM15 55h1v1h-1zM253 57h1v1h-1zM191 58h1v1h-1zM58 66h1v1h-1zM286 67h1v1h-1zM219 72h1v1h-1zM103 73h1v1h-1zM306 73h1v1h-1zM19 83h1v1h-1zM157 96h1v1h-1zM272 97h1v1h-1z" />
      </g>
    </svg>
  );
};
