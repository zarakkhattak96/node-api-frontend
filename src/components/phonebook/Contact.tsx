// contact page: where the submitted data is displayed
import "../../App.css";
export type ContactInfo = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
};

const Contact = ({ id, name, email, address }: ContactInfo) => {
  return (
    <div className="user">
      <div>
        <p>
          {id} - {name} - {email} - {address}
        </p>
      </div>
    </div>
  );
};

export default Contact;
