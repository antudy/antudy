/*
1. 파이어베이스에서 스터디 정보들 불러오기
2. 글자를 입력할 때마다 파이어베이스에서 불러온 데이터들에서 검색한 결과를 포함하고 있는 데이터가 있는지 탐색
3.
*/

import { FlatList } from "react-native";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { loadStudy } from "../../firebaseConfig";
import { Searchbar } from "react-native-paper";
import SearchCard from "../components/SearchCard";

const SearchScreen = ({ navigation }) => {
  // 스터디들 목록
  const [studyList, setStudyList] = useState([]);
  // 검색 결과
  const [searchResult, setSearchResult] = useState([]);
  // 검색
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  // 데이터 불러오기
  useEffect(() => {
    loadStudy(setStudyList);
  }, []);

  // 입력할 때마다 데이터들의 name과 비교해서 포함하고 있으면 검색 결과에 포함
  useEffect(() => {
    setSearchResult(
      !searchQuery
        ? []
        : studyList.filter((v) =>
            v.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
    );
    console.log(searchResult);
  }, [searchQuery]);

  const renderItem = useCallback(({ item }) => {
    const pressSearchCard = () => {
      navigation.navigate("JoinStudy", {
        studyName: item.name,
        location: item.location,
        members: item.members,
        category: item.category,
      });
    };
    return <SearchCard name={item.name} onPress={pressSearchCard} />;
  }, []);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={searchResult}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
};
export default SearchScreen;
