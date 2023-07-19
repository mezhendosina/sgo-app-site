export default function Grades() {
    return (
        <div className={"max-h-screen flex items-center justify-around pt-96 pb-96"} id={"grades"}>
            <div>
                <p>Быстрый доступ к</p>
                <div className={"flex"}>
                    <div className={"flex flex-col"}>
                        <p>триместровым</p>
                        <p className={"hidden"}>четвертным</p>
                        <p className={"hidden"}>семестровым</p>
                    </div>
                    <p className={"ps-2"}>оценкам</p>
                </div>
            </div>
            <div className={"ps-8"}>
                <img src={"/screenshot-grades.svg"} alt={""}/>
            </div>
        </div>
    )
}