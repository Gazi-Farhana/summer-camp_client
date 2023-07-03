import { Roll } from "react-awesome-reveal";


const SectionTitle = ({title, subtitle}) => {
    return (
        <div className="text-center py-10">
            <Roll className="lg:text-5xl text-xl font-semibold">{title}</Roll>
            <div className="divider"></div>
            <h3 className="text-gray-400 italic font-extrabold uppercase">{subtitle}</h3>
        </div>
    );
};

export default SectionTitle;