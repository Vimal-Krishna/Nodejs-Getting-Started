#include <iostream>
using namespace std;
int main() {
    auto func = [=](){
        cout << func << endl;
    };
    return 0;
}