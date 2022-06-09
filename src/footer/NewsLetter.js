import FormInput from "../helper/FormInput";
import style from "./Footer.module.css";
export const NewsLetter=()=>{
    return(
        <div class="col-12 col-md-10">
        <form>
          <FormInput css={`text-dark ${style["newsletter__email"]}`} label="NewsLetter" type="email" placeholder="yourname@xyz.com"/>
          <button type="submit" className={"btn col-12 col-md-4 overflow-hidden "+style.btn}>Subscribe</button>
        </form>
      </div>
    )
}