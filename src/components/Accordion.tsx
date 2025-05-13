import { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import { ACCORDION } from '../data';
import { Collapse } from 'react-collapse';

const Accordion = () => {

    const [open, setOpen] = useState<number | null>(null);

    const toggle = (index: number) => {
        if(open === index) {
            return setOpen(null);
        }

        setOpen(index);
    }

    return (
        <div className="mx-4">
            <h4 className="mx-6 text-2xl text-amber-600">FAQ</h4>
            <h3 className="mx-6 max-w-lg font-bold text-[32px]">Frequently Asked Questions </h3>
            <div className="pt-6 max-w-[800px]">
                {ACCORDION.map((item, index) => ( 
                  <AccordionItem
                  key={index}
                  open={index === open}
                  question={item.question}
                  answer={item.answer}
                  toggle={() => toggle(index)}
                  />
                ))}
            </div>
        </div>
    )
}

type AccordionItemProps = {
    open: boolean;
    toggle: () => void,
    question: string,
    answer: string,
}

const AccordionItem = ({open, toggle, question, answer}: AccordionItemProps) => {
    return(
        <div className="mx-4 pt-3 text-[16px]">
            <div onClick={toggle} className={`px-3 py-3 flex items-center gap-x-4 font-bold cursor-pointer ${open ? "bg-amber-600 text-white" : ""}  `}>
                <div>{open ? <FaMinus/> : <FaPlus/>}</div>
                <h4>{question}</h4>
            </div>
            <Collapse isOpened={open}>
            <p className="p-4  text-slate-500">{answer}</p>
            </Collapse>
        </div>

    )
}

export default Accordion;