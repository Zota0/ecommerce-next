import { useRouter } from "next/router";

export default function Details() {
    
    const router = useRouter();
    console.log(router);
    const {query} = router;
    const {details} = query;

    return (
        <div>
            <h1>Detalis - {details}</h1>
        </div>
    );
}