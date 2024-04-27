
import React from 'react';
import '../Styles/Faq.css';
import '../Images/plus.svg';
import '../Images/minus.svg';
import Category from './Category';
import Question from './Question';
import Navbar from '../Nav/Navbar';
import { motion, AnimatePresence } from "framer-motion"
import useResize from '../utils/useResize';
import { useState } from 'react';
import { useSelector } from 'react-redux';







  





 


function Faq() {
  const language = useSelector((state) => state.language.value);
  const windowWidth = useResize("Frequently Asked Questions");
  const [dataFromNav, setDataFromNav] = useState(true);

    const handleDataFromNav = (data) => {
        setDataFromNav(data);
    };
  const quiz = [
    {id :  1,
      questionEn: "When was the UIT founded?",
      questionMyn: "UIT ကို ဘယ်တုန်းက တည်ထောင်ခဲ့တာလဲ။",
      answerEn: `The University of  Studies, Yangon was initially known as UCC, when it was established in 1971 but it changed into the Institute of Computer Science and Technology (ICST) in 1988. On 1st July, 1998, it became the University of Computer Studies, Yangon. There are currently altogether 25 Computer Universities around the country. The University of Computer Studies (Bahan Campus) was separately established on 3rd December, 2012, as the Center of Excellence to produce the competent computer professionals and specialists who will become invaluable human resources in ICT sector.
      
      The University was officially renamed the University of Information Technology (UIT) on 15th April, 2015. The University of Information Technology produces about 200 Undergraduate students every year. It also offers Undergraduate and Post-graduate courses for Bachelor, Diploma, Master’s and Doctorate level students in a wide range of subject areas: software engineering, knowledge engineering, high performance computing, business information system, communication and networking, embedded system and computer system technology. UIT is Myanmar’s main center of research in ICT that aim to promote the productivity and the standard of living of the nation.`,
      answerMyn: `University of Studies, Yangon ကို 1971 ခုနှစ်တွင် စတင်တည်ထောင်ခဲ့ပြီး UCC ဟုခေါ်တွင်ခဲ့သော်လည်း 1988 ခုနှစ်တွင် Institute of Computer Science and Technology (ICST) အဖြစ် ပြောင်းလဲခဲ့ပါသည်။ 1998 ခုနှစ် ဇူလိုင်လ 1 ရက်နေ့တွင် ရန်ကုန်ကွန်ပျူတာတက္ကသိုလ်ဖြစ်လာခဲ့ပါသည်။ . လက်ရှိတွင် နိုင်ငံတစ်ဝှမ်းရှိ ကွန်ပျူတာတက္ကသိုလ်ပေါင်း ၂၅ ခုရှိသည်။ ကွန်ပြူတာလေ့လာရေးတက္ကသိုလ် (ဗဟန်းကျောင်းဝင်း)ကို အိုင်စီတီကဏ္ဍတွင် တန်ဖိုးမဖြတ်နိုင်သော လူ့စွမ်းအားအရင်းအမြစ်များဖြစ်လာစေမည့် အရည်အချင်းရှိသော ကွန်ပျူတာပညာရှင်များနှင့် အထူးကျွမ်းကျင်သူများကို မွေးထုတ်ပေးရန် ထူးချွန်ဗဟိုဌာနအဖြစ် ၂၀၁၂ ခုနှစ် ဒီဇင်ဘာလ ၃ ရက်နေ့တွင် သီးခြားဖွဲ့စည်းခဲ့ပါသည်။
      
      ၂၀၁၅ ခုနှစ်၊ ဧပြီလ ၁၅ ရက်နေ့တွင် သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ် (UIT) ဟု တရားဝင်အမည်ပြောင်းခဲ့သည်။ သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘွဲ့ကြိုကျောင်းသား ၂၀၀ ခန့်ကို နှစ်စဉ်မွေးထုတ်ပေးပါသည်။ ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးအချက်အလက်စနစ်၊ ဆက်သွယ်ရေးနှင့် ကွန်ရက်ချိတ်ဆက်မှု၊ မြှုပ်နှံထားသောစနစ်နှင့် ကွန်ပျူတာစနစ်တို့၌ ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မဟာဘွဲ့နှင့် ပါရဂူဘွဲ့အဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ပေးသည်။ နည်းပညာ။ UIT သည် နိုင်ငံ၏ ထုတ်လုပ်မှုစွမ်းအားနှင့် လူနေမှုအဆင့်အတန်းကို မြှင့်တင်ရန် ရည်ရွယ်သော ICT သုတေသန၏ အဓိကဗဟိုချက်ဖြစ်သည်။`
    },
    {id :  2,
      questionEn: "How do I contact the University? What is the University's address and telephone number?",
      questionMyn: "တက္ကသိုလ်ကို ဘယ်လိုဆက်သွယ်ရမလဲ။ တက္ကသိုလ်ရဲ့ လိပ်စာနဲ့ ဖုန်းနံပါတ်က ဘာလဲ။",
      answerEn: "University of Information Technology\nParami Road, Hlaing Campus\nYangon\nThe Republic of the Union of Myanmar\n\nPhone : +95-1-9664254      +95-775994221       +95-774152166\n\nFax : +95-1-9664250\n\nEmail : contact@uit.edu.mm",
      answerMyn: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်\nပါရမီလမ်း၊ လှိုင်တက္ကသိုလ်နယ်မြေ\nရန်ကုန်\nပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံ\n\nဖုန်း : +95-1-9664254 +95-775994221 +95-774152166\n\nFax : +95-1-9664250 \n\nအီးမေးလ်- contact@uit.edu.mm"
    },
    {id :  3,
      questionEn: "What are the requirements for the applicants?",
      questionMyn: "လျှောက်ထားသူများအတွက် လိုအပ်ချက်ကဘာလဲ။",
      answerEn: "The students are to get (at least 450 total marks)in the Matriculation Examination to apply the UIT. The candidates from the whole country are applicable to join this University. The time to join this university is in November.The basic requirements are:\n- 4 Photographs of Applicant\n- Copies and Original of NRC Information of Applicant and Parents-copy\n- Copy and Original of Matriculation Exam Mark Receipt\n- Letter of recommendation of Police Station\n - Letter of recommendation of quarter",
      answerMyn: "ကျောင်းသားများသည် UIT ကိုလျှောက်ထားရန်အတွက် တက္ကသိုလ်ဝင်တန်းစာမေးပွဲတွင် (အနည်းဆုံး စုစုပေါင်း အမှတ် ၄၅၀) ရရှိရမည်ဖြစ်သည်။ နိုင်ငံတစ်ဝှမ်းမှ လျှောက်ထားသူများသည် ဤတက္ကသိုလ်သို့ တက်ရောက်နိုင်ပါသည်။ ဤတက္ကသိုလ်သို့ တက်ရောက်ရမည့်အချိန်သည် နိုဝင်ဘာလတွင်ဖြစ်သည်။ အခြေခံလိုအပ်ချက်များမှာ-\n- လျှောက်ထားသူ၏ ဓာတ်ပုံ ၄ ပုံ\n- လျှောက်ထားသူနှင့် မိဘများ၏ NRC အချက်အလက်မိတ္တူနှင့် မူရင်း-မိတ္တူ\n- တက္ကသိုလ်ဝင်တန်းစာမေးပွဲ အမှတ်အသားပြေစာ၏ မူရင်းနှင့် မိတ္တူ\n - ရဲစခန်းထောက်ခံစာ\n - ရပ်ကွက်ထောက်ခံစာ"
      },
      {id :  4,
        questionEn: "How long it will take for Graduate Program?",
        questionMyn: "Graduate Program အတွက် ဘယ်လောက်ကြာမလဲ။",
        answerEn: "It will take five years to get a Bachelor’s Degree.",
        answerMyn: "ဘွဲ့တစ်ခုရရှိရန် ငါးနှစ်ကြာမည်ဖြစ်သည်။"  },
      {id :  5,
          questionEn: "How many students are there in the University as of now?",
          questionMyn: "အခု တက္ကသိုလ်မှာ ကျောင်းသား ဘယ်လောက်ရှိလဲ။",
          answerEn: "Current, there are 1038 students now.",
          answerMyn: "လက်ရှိ ကျောင်းသားဦးရေ ၁၀၃၈ ဦးရှိနေပြီဖြစ်သည်။"  },

  ]
  return (
    <>
     <Navbar sendDataToParent={handleDataFromNav}/>
    <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main px-2 app' : 'main px-2 app'}>
     
      <div className="my-20 mt-40 sm:ml-10 sm:mt-50 mb-15">
      <motion.span initial={{ y: 50,opacity: 0 }} animate={{ y: 0,opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} className="text-6xl md:text-8xl  p-3.5 dd ">Frequently</motion.span>
      <motion.span initial={{ y: 50,opacity: 0 }} animate={{ y: 0,opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} className="text-6xl md:text-8xl  p-3.5 dd">asked</motion.span>
      <motion.h3 className="text-6xl md:text-8xl w-50  p-3.5  "  initial={{ y: 50,opacity: 0 }} animate={{ y: 0,opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} >questions</motion.h3>
      </div>


      <div className="w-90 main">
      <div className="alignment"><Category name="General" /></div>
      {quiz.map(item => (
        <Question id={item.id} question={(language == "EN") ? item.questionEn : item.questionMyn } answer={(language == "EN") ? item.answerEn : item.answerMyn} />
      ))}


    

      </div>
      
      
      
      

  
    </div>
    </>
  );
}

export default Faq;
