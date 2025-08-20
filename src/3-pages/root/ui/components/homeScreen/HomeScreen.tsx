import Button from "@/7-shared/ui/components/button/Button.tsx";
import styles from "@/3-pages/root/ui/components/buttonNew/ButtonNew.module.css";
const HomeScreen = () => {


    return (
        <div>
            HOME Screen
            <Button
                color="#FA5F0"
                onClick={() => console.log("clicked")}
                disabled={false}
                className={styles.activeButtonColor}
            >
                HOME Сохранить
            </Button>

        </div>
    );
};

export default HomeScreen;