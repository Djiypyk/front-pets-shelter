import {Button, Input} from "@/7-shared/ui";

export const Search = () => {
    return (
        <div>
            <h4 className="text-gray-300">Поиск</h4>
            <hr className="text-gray-300 "/>
            <div className="bg-green-50">
                <h2 className="text-4xl text-gray-950 pt-16 pb-8">Найдите своего питомца</h2>
                <Input variant={'outline'} placeholder={'Введите текст'}/>
                <Button variant={'primary'} children={'Search'}/>

                <div className="flex justify-between">
            <span className="bg-pink-100 flex pt-6 pb-8 justify-start max-w-1/2">
                <Button variant="outline" children="Cats"/>
            <Button variant="outline" children="Dogs"/>
            <Button variant="outline" children="All"/>
            </span>
                    <span className="flex-1/1 bg-pink-50 flex p-6 justify-end">
                             <Button variant="circle" children="▽"/>
            <Button variant="circle" children="☐"/>
                    </span>
                </div>
            </div>
        </div>

    );
};
