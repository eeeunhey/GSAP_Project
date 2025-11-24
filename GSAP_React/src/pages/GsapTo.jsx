import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export const GsapTo = () => {
    useGSAP(()=>{
        // to(해당 id를 (객체), 얼만큼 이동할지 )
        gsap.to('#blue-box',{
            x:250,
            y:250,
        })
    },[])

    return (
        <main>
            <h1>GsapTo</h1>


            <p className="mt-5 text-gray-500">
                <code>gsap.to()</code> 란 메소드는 요소를 지금 상태에서 다른 상태로 변경하는 애니메이션이다
            </p>

            <p className="mt-5 text-gray-500">
                <code>gsap.to</code> 는 <code>gasp.from</code> 차이가 있다
            </p>

            <p className="mt-5 text-gray-500">
                <code>gsap.to()</code> : 현재 상태 → 새로운 상태
                <code>gsap.from()</code> : 새로운 상태 → 현재 상태
            </p>
            <p>

            </p>
            <div className="mt-20">
                <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg">

                </div>
            </div>


        </main>

    )

}