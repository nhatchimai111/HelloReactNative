// Mỗi 1 màn hình trong project là 1 component

// Các bước viết code

// B1: import những thư viện cần thiết
import React, {Component} from "react" // Không thể thiếu


// import danh sách những component cần dùng - render đối tượng nào import đối tượng đó
import{

  AppRegistry, View, Text, StatusBarAndroid

} from "react-native"


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class HelloReactNative extends Component {

  // Chạy đầu tiên khi load màn hình
  constructor(props){

    super(props);
    console.log("CONTRUCTOR RUN");
  }

  // Chạy trước khi render - Chuẩn bị tạo giao diện
  componetWillMount(){

    console.log("WILL MOUNT RUN");
  }

  // Vẽ ra những gì người dùng nhìn thấy - Tạo giao diện
  render(){
    console.log("RENDER RUN");

      return(
        // View là thẻ lớn nhất, tương đương với thẻ div trong html
        <View>

          <Text style={{marginTop:100}}>Hello React Native</Text>
        </View>

      );
  };

  // Chạy sau khi render - Tạo giao diện xong
  componentDidMount(){

    console.log("DID MOUNT RUN");
  }

}

// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);