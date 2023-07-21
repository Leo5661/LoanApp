import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getEMIInstalmentAmount} from '../utils/EmiPackageGen';

type Props = {
  principleAmount: number;
  time: number;
  rateOfIntrest: number;
};

const EmiCard = ({principleAmount, time, rateOfIntrest}: Props) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const {emi, totalOfEmi, totalPayment} = getEMIInstalmentAmount(
    principleAmount,
    rateOfIntrest,
    time,
  );

  return (
    <Pressable
      className="shadow-inne m-4 justify-between rounded-md border border-gray-200 bg-white p-2"
      style={{
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 5.65,
      }}
    >
      <View className="w-full flex-row items-center justify-between px-2">
        <View className="flex-col">
          <Text className="text-base text-gray-500"> Instalment Amount </Text>
          <View className="mt-2 flex-row items-end justify-start px-2">
            <FontAwesome name="rupee" color={'gray'} size={30} />
            <View className="ml-2 flex-row">
              <Text className="items-bottom text-3xl text-black">{`${emi} * `}</Text>

              <Text className="items-bottom text-xl text-gray-500">
                {`${time * 12} `}
                <Text className="items-bottom text-base text-gray-500">
                  in months
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-col">
          <View className="mr-2 flex-col">
            <Text className="w-fit text-gray-400 first-letter:text-sm">
              Intrest Rate
            </Text>
            <Text className="w-fit text-base text-gray-500">
              {`${rateOfIntrest}% `}
              <Text className="w-fit text-sm text-gray-400">p.a.</Text>
            </Text>
          </View>
        </View>
      </View>

      <Pressable
        className="flex-row items-center justify-end"
        onPress={() => {
          setShowDetails(!showDetails);
        }}
      >
        <Text className="p-1 text-base text-indigo-400">Details</Text>
        <FontAwesome
          name={showDetails ? 'chevron-up' : 'chevron-down'}
          color={'indigo'}
          size={10}
        />
      </Pressable>

      {showDetails ? (
        <View>
          <View className="my-1 flex-row justify-between">
            <Text className="text-lg font-normal text-gray-500">
              Loan Amount
            </Text>
            <View className="flex-row items-center">
              <FontAwesome name="rupee" color={'gray'} size={12} />
              <Text className="ml-1 text-lg font-semibold text-gray-600">
                {principleAmount}
              </Text>
            </View>
          </View>

          <View className="my-1 flex-row justify-between">
            <Text className="text-lg font-normal text-gray-500">
              Total Interest Amount
            </Text>
            <View className="flex-row items-center">
              <FontAwesome name="rupee" color={'gray'} size={12} />
              <Text className="ml-1 text-lg font-semibold text-gray-600">
                {totalOfEmi}
              </Text>
            </View>
          </View>

          <View className="border border-gray-200"></View>

          <View className="my-1 flex-row justify-between">
            <Text className="text-lg font-normal text-gray-500">
              Total after all EMI's Amount
            </Text>
            <View className="flex-row items-center">
              <FontAwesome name="rupee" color={'gray'} size={12} />
              <Text className="ml-1 text-lg font-semibold text-gray-600">
                {totalPayment}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
    </Pressable>
  );
};

export default EmiCard;
