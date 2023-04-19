import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ThumbImage from "./assets/Images/thumnail.png"
import { Separator } from "@/components/ui/separator"
import { Input } from '@/components/ui/input'
function ChatBox() {

    const [query, setQuery] = React.useState('');
    const [submittedQuery, setSubmittedQuery] = React.useState("");

    const router = useRouter();
    const backHandler = () => {
      router.push("/");
    };

    function handleSubmit(event) {
        event.preventDefault();
        setSubmittedQuery(query);
      }


  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:m-10 md:m-10 ">
      <div className="sm:col-12 ">
        <div className="mb-5">
          <h1 className="text-4xl ml-2 mb-4">
            Ask me anything about this Video...
          </h1>
          <Image
            src={ThumbImage}
            style={{ width: "100%", height: "500px", borderRadius: 25 }}
            alt="Thumbnail"
          />
        </div>
        <div className="    ">
          <Button variant="outline" className="m-1">
            Summarize in 10 points
          </Button>
          <Button variant="outline" className="m-1">
            What's the main takeaway?
          </Button>
          <Button variant="outline" className="m-1">
            Explain like I'm 5
          </Button>
        </div>
      </div>

      <div className="flex items-end w-full bg-slate-100 m-2 p-10 sm:col-12 ">
        <div className="flex flex-col  w-full">
          <div className="mb-4">{submittedQuery && submittedQuery}</div>
          <form
            className="flex   align-bottom items-center space-x-2"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              placeholder=""
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBox


{/* <div className='grid grid-cols-2'>


<Button onClick={() => backHandler()} variant="link">
    Back
  </Button>
</div> */}