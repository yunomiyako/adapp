/*
 * プログラム名：野球ゲームプログラムStep8
 * プログラムの説明：配列データの重複チェックを行う「クラスメソッド」を定義、
 * 　　　　　　　　　isUniqueArrayメソッドを利用するようにソースコードを修正
 * 作成者：粟田実鈴
 * 作成日：2018/04/18
 */

//入力準備
import java.util.Scanner;


public class BaseBallS09 {

	//生成したい数字の桁数
	public static final int DIGIT = 3;

	//answerを宣言しランダムな数値を要素として代入するメソッド
	static int[] makeRandom(int degit){
		int[] answer = new int[degit];
		for(int i = 0; i < degit; i++){
			answer[i] = (int)(Math.random()*10);
		}
		return answer;
	}
	//配列answerを文字列に変換するメソッド
	static String makeString(int[] answer){
		String str = "";
		for(int i = 0; i < answer.length; i++){
			str += answer[i];
		}
		return str;
	}

	//ユニークのチェック(ユニークならtrueを返す)メソッド

	static boolean isUniqueArray(int[] answer){
		for(int i = 0; i < answer.length; i++){
			for(int j = i+1; j < answer.length; j++){
				if(answer[i] == answer[j]){
					return false;
				}
			}
		}
		return true;
	}


	public static void main(String[] args) {

		//全体の例外処理
		try{
			//開始
			System.out.println("---野球ゲームプログラム開始---");

			//正解数字用
			int[] answer = null;

			while(true){   //繰り返し開始
				//ランダム数字の生成するメッソドを呼び出してanswerへ
				answer = makeRandom(DIGIT);

				//answerを文字列に変換するメソッドを呼び出してstrへ
				String str = makeString(answer);
				System.out.println();

				//正解数字の判定
				System.out.println(answer.length + "桁のランダム数字（正解数字）は" + str  + "です。");

				//ユニークかのチェックするメソッドを呼び出し
				if(isUniqueArray(answer)){
					System.out.println("⇒ユニークです。");
					break;
				}else {
					System.out.println("⇒重複しています。");
				}
			} //繰り返し終了


			//予想数字と判定
			//予想数字を入力
			Scanner scan  = new Scanner(System.in);

			//入力用
			int[] playerNum = new int[DIGIT];
			String playerNumstr = "";

			//挑戦回数
			int count = 0;

			//配列の例外処理
			try{

				//入力繰り返し
				while(true){   //繰り返し開始


					//(入力の例外処理
					try{

						//String型として入力受付
						System.out.println();
						System.out.print(DIGIT + "桁の数字を入力してください＞＞");
						playerNumstr = scan.nextLine();

						//空白エラー
						if( playerNumstr.equals("") ){
							System.out.println("何も入力されていません。ユニークな3桁の数字を入力してください。");
							continue;
						}

						/*入力した数字（String型）を各桁ごとに分解し、
							配列変数「playerNum」の各要素に格納*/
						for(int i = 0; i < playerNum.length; i++){
							playerNum[i] = Integer.parseInt(playerNumstr.substring(i, i + 1)) ;
						}

					} catch (NumberFormatException e) {
						System.out.println("文字が入力されました。ユニークな3桁の数字を入力してください。");
						continue;
					}  //入力の例外処理)

					//桁数の判定
					if(playerNumstr.length() != DIGIT){
						System.out.println("3桁の数字ではありません。ユニークな3桁の数字を入力してください。");
						continue;
					}

					//メソッドを呼び出してユニークかをチェックし表示
					if(isUniqueArray(playerNum)){
						System.out.println("⇒ユニークです。");
						count++;
					}else {
						System.out.println("⇒重複しています。");
						continue;
					}

					//ストライク数カウント（ユニークのとき+1）
					int stCount = 0 ;
					if(isUniqueArray(playerNum) == true){
						for(int i = 0; i < answer.length; i++){
							if(answer[i] == playerNum[i]){
								stCount= stCount + 1;
							}
						}
					}
					System.out.print("判定：" + stCount + "ストライク、");

					/*			ボール数カウント
			  （正解数字の配列と予想数字の要素番号が等しくないとき、
			   それらを比較して同値なら+1）*/
					int ball = 0;
					for(int i = 0; i < answer.length; i++){
						for(int j =0 ; j < answer.length; j++){
							if( (i != j) && (answer[i] == playerNum[j]) ){
								ball = ball + 1 ;
							}
						}
					}
					System.out.println(ball +"ボールです。");

					//ストライクが3なら処理を終了する
					if(stCount==3){
						break;
					}



				} //繰り返し終了

			} catch(ArrayStoreException e ) {
				System.out.println("配列のエラーが発生しました。");
			}

			//結果表示
			System.out.println();
			System.out.println(count + "回トライし、" + DIGIT + "桁数字を当てました。You Win！");

			//終了
			System.out.println();
			System.out.println("---野球ゲームプログラム終了---");

		}catch(Exception e){
			System.out.println( e + "という例外が発生しました。");

		}
	}

}
